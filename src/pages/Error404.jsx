import { useNavigate } from "react-router-dom";
import { Flex, Image, Button } from "@chakra-ui/react";
import { error404 } from "assets";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center" h="100vh" w="100vw">
      <Image src={error404} alt="errorPage" objectFit="contain"></Image>
      <Button
        position="absolute"
        bottom="10%"
        onClick={() => navigate("/home")}
      >
        Return To Home
      </Button>
    </Flex>
  );
};

export { Error404 };
