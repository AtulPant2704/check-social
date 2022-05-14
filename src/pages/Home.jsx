import { Flex, Box } from "@chakra-ui/react";
import { SideNav, PostCard, UsersSidebar } from "components";

const Home = () => {
  return (
    <Flex backgroundColor="bg" w="90%" mx="auto" my="4" gap="10">
      <SideNav />
      <Box>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Box>
      <UsersSidebar />
    </Flex>
  );
};

export { Home };
