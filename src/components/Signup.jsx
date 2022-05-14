import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";

const Signup = ({ setAuthType }) => {
  const navigate = useNavigate();

  return (
    <Box w={{ base: "90%", sm: "70%" }}>
      <FormControl>
        <Input placeholder="Enter First Name" mb="4" />
        <Input placeholder="Enter Last Name" mb="4" />
        <Input placeholder="Enter Email" mb="4" />
        <Input placeholder="Enter Username" mb="4" />
        <Input placeholder="Enter Password" mb="8" />
        <Button
          variant="solid"
          display="block"
          w="100%"
          mb="4"
          onClick={() => navigate("/home")}
        >
          Signup
        </Button>
      </FormControl>
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
