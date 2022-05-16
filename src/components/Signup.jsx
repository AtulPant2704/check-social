import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Checkbox, Text, useToast } from "@chakra-ui/react";
import { signupUser } from "redux/asyncThunks";

const Signup = ({ setAuthType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [remember, setRemember] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const checkInputs = () => {
    return (
      newUser.username &&
      newUser.password &&
      newUser.email &&
      newUser.firstName &&
      newUser.lastName
    );
  };

  const signupHandler = async (e) => {
    if (checkInputs()) {
      e.preventDefault();
      const response = await dispatch(signupUser(newUser));
      if (response?.payload?.status === 201) {
        if (remember) {
          localStorage.setItem("token", response.payload.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.createdUser)
          );
        }
        navigate("/home");
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
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
          placeholder="Enter Email"
          mb="4"
          name="email"
          value={newUser.email}
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
        <Checkbox
          borderColor="brand.100"
          colorScheme="green"
          _focus={{ borderColor: "transparent" }}
          _active={{ borderColor: "transparent" }}
          onChange={() => setRemember((prev) => !prev)}
        >
          I accept all Terms & Conditions
        </Checkbox>
        <Button
          variant="solid"
          display="block"
          w="100%"
          mt="8"
          mb="4"
          onClick={signupHandler}
          isLoading={isLoading}
          loadingText="Signing In"
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
