import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Box, Heading, useDisclosure } from "@chakra-ui/react";
import {
  SideNav,
  PostCard,
  UsersSidebar,
  MobileNav,
  PostModal,
} from "components";
import { getPosts } from "redux/asyncThunks";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log("posts", posts);

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
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
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
