import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Text,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { signupUser } from "redux/asyncThunks";

const Signup = ({ setAuthType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const toast = useToast();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const { isLoading } = useSelector((state) => state.auth);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const passwordValidation = () => {
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (regularExpression.test(newUser.password)) {
      return true;
    } else {
      toast({
        description:
          "Password should have number, uppercase and lowercase letter and a special character",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    if (passwordValidation()) {
      const response = await dispatch(signupUser(newUser));
      if (response?.payload?.status === 201) {
        navigate(location?.state?.from?.pathname || "/home", {
          replace: true,
        });
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
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
    }
  };

  return (
    <Box w={{ base: "90%", sm: "70%" }}>
      <Box as="form" onSubmit={signupHandler}>
        <Input
          placeholder="Enter First Name"
          mb="4"
          minLength="3"
          required
          name="firstName"
          value={newUser.firstName}
          onChange={inputHandler}
        />
        <Input
          placeholder="Enter Last Name"
          mb="4"
          minLength="3"
          required
          name="lastName"
          value={newUser.lastName}
          onChange={inputHandler}
        />
        <Input
          placeholder="Enter Username"
          mb="4"
          minLength="1"
          required
          name="username"
          value={newUser.username}
          onChange={inputHandler}
        />
        <InputGroup>
          <Input
            type={passwordType}
            placeholder="Enter Password"
            mb="4"
            minLength="8"
            required
            name="password"
            autoComplete="true"
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
        <Button
          variant="solid"
          display="block"
          type="submit"
          w="100%"
          mt="8"
          mb="4"
          isLoading={isLoading}
          loadingText="Signing In"
          spinnerPlacement="center"
        >
          Signup
        </Button>
      </Box>
      <Text textAlign="center">
        Already have an account
        <Button variant="link" ml="1" onClick={() => setAuthType("login")}>
          Login
        </Button>
      </Text>
    </Box>
  );
};

export { Signup };
