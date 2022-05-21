import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
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
  const { isLoading } = useSelector((state) => state.auth);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const checkInputs = () => {
    return (
      newUser.username &&
      newUser.password &&
      newUser.firstName &&
      newUser.lastName
    );
  };

  const signupHandler = async (e) => {
    if (checkInputs()) {
      e.preventDefault();
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
    } else {
      toast({
        description: "Enter all the fields",
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
          placeholder="Enter First Name"
          mb="4"
          name="firstName"
          value={newUser.firstName}
          onChange={inputHandler}
        />
        <Input
          placeholder="Enter Last Name"
          mb="4"
          name="lastName"
          value={newUser.lastName}
          onChange={inputHandler}
        />
        <Input
          placeholder="Enter Username"
          mb="4"
          name="username"
          value={newUser.username}
          onChange={inputHandler}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          mb="4"
          name="password"
          value={newUser.password}
          onChange={inputHandler}
        />
        <Button
          variant="solid"
          display="block"
          w="100%"
          mt="8"
          mb="4"
          onClick={signupHandler}
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
