import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Flex,
  Box,
  Heading,
  CircularProgress,
  useDisclosure,
} from "@chakra-ui/react";
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
  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const userFeed = posts.filter(
    (item) =>
      user.username === item.username ||
      user.following.some((follower) => follower.username === item.username)
  );

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <Box h="100%">
        {isLoading ? (
          <CircularProgress
            isIndeterminate
            color="brand.500"
            position="fixed"
            top="50%"
            left="50%"
            size="80px"
            thickness="10px"
          />
        ) : (
          <>
            <Flex justifyContent="center" bgColor="gray.200">
              <Heading
                color="brand.500"
                display={{ base: "block", md: "none" }}
              >
                CheckSocial
              </Heading>
            </Flex>
            <Flex backgroundColor="bg" w="90%" mx="auto" my="4" gap="10">
              <SideNav onOpen={onOpen} />
              {userFeed.length !== 0 ? (
                <Box maxW="60%">
                  {userFeed.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </Box>
              ) : (
                <Flex w="50rem" justifyContent="center" alignItems="center">
                  <Heading as="h3" size="md" textAlign="center">
                    No posts to display, start following other users to update
                    your feed.
                  </Heading>
                </Flex>
              )}
              <UsersSidebar />
            </Flex>
            <Box
              position="sticky"
              bottom="0"
              left="0"
              right="0"
              h="50px"
              bgColor="black"
              display={{ base: "block", md: "none" }}
              zIndex="2"
            >
              <MobileNav onOpen={onOpen} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export { Home };
