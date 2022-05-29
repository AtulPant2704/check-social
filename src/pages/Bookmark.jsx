import { useState, useEffect } from "react";
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
import { getPosts, getUserBookmarks } from "redux/asyncThunks";

const Bookmark = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { bookmarks, token, bookmarkStatus } = useSelector(
    (state) => state.auth
  );
  const { posts, status } = useSelector((state) => state.posts);
  const [editedPost, setEditedPost] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPosts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (bookmarkStatus === "idle") {
      dispatch(getUserBookmarks(token));
    }
  }, [dispatch, bookmarkStatus, token]);

  const bookmarkedPosts = posts.filter((currPost) =>
    bookmarks.some((curr) => curr === currPost._id)
  );

  return (
    <>
      {isOpen ? (
        <PostModal
          isOpen={isOpen}
          onClose={onClose}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
        />
      ) : null}
      <Box h="100%">
        {bookmarkStatus === "pending" ? (
          <CircularProgress
            isIndeterminate
            color="brand.500"
            position="fixed"
            top="50%"
            left="50%"
            size="80px"
            thickness="10px"
          />
        ) : null}
        {status === "resolved" ? (
          <>
            <Flex justifyContent="center" bgColor="gray.200">
              <Heading
                color="brand.500"
                display={{ base: "block", md: "none" }}
                py="1"
              >
                CheckSocial
              </Heading>
            </Flex>
            <Flex backgroundColor="bg" w="90%" mx="auto" my="4" gap="10">
              <SideNav onOpen={onOpen} />
              {bookmarkedPosts.length !== 0 ? (
                <Box
                  maxW="40rem"
                  minW={{ lg: "36rem", md: "70%", base: "100%" }}
                  h="calc(95.2vh - 90px)"
                >
                  {bookmarkedPosts.map((post) => (
                    <PostCard
                      key={post._id}
                      post={post}
                      onOpen={onOpen}
                      setEditedPost={setEditedPost}
                    />
                  ))}
                </Box>
              ) : (
                <Flex
                  w="50rem"
                  justifyContent="center"
                  alignItems="center"
                  h="calc(95.2vh - 90px)"
                >
                  <Heading as="h3" size="md" textAlign="center">
                    Nothing has been bookmarked.
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
        ) : null}
      </Box>
    </>
  );
};

export { Bookmark };
