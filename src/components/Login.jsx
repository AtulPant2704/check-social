import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Input,
  Checkbox,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { loginUser } from "redux/asyncThunks";

const Login = ({ setAuthType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const toast = useToast();
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const { isLoading } = useSelector((state) => state.auth);

  const guestUser = {
    username: "Guest123",
    password: "Guest@123",
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const guestUserHandler = () => {
    setNewUser(guestUser);
    setRememberMe(true);
  };

  const checkInputs = () => {
    return newUser.username && newUser.password;
  };

  const loginHandler = async (e) => {
    if (checkInputs()) {
      e.preventDefault();
      const response = await dispatch(loginUser(newUser));
      if (response?.payload?.status === 200) {
        if (rememberMe) {
          localStorage.setItem("token", response.payload.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.foundUser)
          );
        }
        navigate(location?.state?.from?.pathname || "/home", {
          replace: true,
        });
        toast({
          description: "Successfully Logged In",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: `${response.payload.data.errors[0]}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      toast({
        description: "Enter both the fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w={{ base: "90%", sm: "70%" }}>
      <Box as="form">
        <Input
          placeholder="Enter Username"
          mb="4"
          name="username"
          value={newUser.username}
          onChange={inputHandler}
        />
        <InputGroup>
          <Input
            type={passwordType}
            placeholder="Enter Password"
            mb="4"
            autoComplete="true"
            name="password"
            value={newUser.password}
            onChange={inputHandler}
          />
          <InputRightElement>
            {passwordType === "password" ? (
              <IconButton
                icon={<AiFillEye />}
                fontSize="2xl"
                onClick={() => setPasswordType("text")}
              ></IconButton>
            ) : (
              <IconButton
                icon={<AiFillEyeInvisible />}
                fontSize="2xl"
                onClick={() => setPasswordType("password")}
              ></IconButton>
            )}
          </InputRightElement>
        </InputGroup>
        <Checkbox
          borderColor="brand.100"
          color="brand.500"
          _focus={{ borderColor: "transparent" }}
          _active={{ borderColor: "transparent" }}
          isChecked={rememberMe}
          onChange={(e) =>
            e.target.checked ? setRememberMe(true) : setRememberMe(false)
          }
        >
          Remember Me
        </Checkbox>
        <Button
          variant="outline"
          display="block"
          w="100%"
          mt="8"
          mb="4"
          onClick={guestUserHandler}
        >
          Enter Guest Credentials
        </Button>
        <Button
          variant="solid"
          display="block"
          w="100%"
          mb="4"
          onClick={loginHandler}
          isLoading={isLoading}
          loadingText="Logging In"
          spinnerPlacement="center"
        >
          Login
        </Button>
      </Box>
      <Text textAlign="center">
        Don't have an account
        <Button variant="link" ml="1" onClick={() => setAuthType("signup")}>
          Signup
        </Button>
      </Text>
    </Box>
  );
};

export { Login };
