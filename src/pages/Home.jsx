import { Flex, Box, Heading, useDisclosure } from "@chakra-ui/react";
import {
  SideNav,
  PostCard,
  UsersSidebar,
  MobileNav,
  PostModal,
} from "components";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <Box>
        <Flex justifyContent="center" bgColor="gray.200">
          <Heading color="brand.500" display={{ base: "block", md: "none" }}>
            CheckSocial
          </Heading>
        </Flex>
        <Flex backgroundColor="bg" w="90%" mx="auto" my="4" gap="10">
          <SideNav onOpen={onOpen} />
          <Box>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Box>
          <UsersSidebar />
        </Flex>
        <Box
          position="sticky"
          bottom="0"
          left="0"
          right="0"
          bgColor="black"
          display={{ base: "block", md: "none" }}
          zIndex="2"
        >
          <MobileNav onOpen={onOpen} />
        </Box>
      </Box>
    </>
  );
};

export { Home };
