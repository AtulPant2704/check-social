import { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Login, Signup } from "components";
import { landingImage } from "assets";

const Landing = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <Flex h="100%">
      <Box
        w="50%"
        h="100%"
        objectFit="contain"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
      >
        <Image
          src={landingImage}
          alt="landing"
          objectFit="cover"
          w="100%"
          h="auto"
        />
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="gray.200"
      >
        {authType === "login" ? (
          <Login setAuthType={setAuthType} />
        ) : (
          <Signup setAuthType={setAuthType} />
        )}
      </Box>
    </Flex>
  );
};

export { Landing };
