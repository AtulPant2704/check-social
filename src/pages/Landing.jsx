import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Login, Signup } from "components";
import { landingImage } from "assets";

const Landing = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [authType, setAuthType] = useState("login");

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

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
