import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";

const Login = ({ setAuthType }) => {
  return (
    <Box w={{ base: "90%", sm: "70%" }}>
      <FormControl>
        <Input placeholder="Enter Username" mb="4" />
        <Input placeholder="Enter Password" mb="8" />
        <Button
          variant="outline"
          colorScheme="twitter"
          display="block"
          w="100%"
          mb="4"
        >
          Enter Guest Credentials
        </Button>
        <Button
          variant="solid"
          colorScheme="twitter"
          display="block"
          w="100%"
          mb="4"
        >
          Login
        </Button>
      </FormControl>
      <Text textAlign="center">
        Don't have an account
        <Button
          variant="link"
          colorScheme="twitter"
          ml="1"
          onClick={() => setAuthType("signup")}
        >
          Signup
        </Button>
      </Text>
    </Box>
  );
};

export { Login };
