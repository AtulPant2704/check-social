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
  Filters,
  SearchUser,
} from "components";
import { getPosts } from "redux/asyncThunks";
import { filterPosts } from "utils";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts, status } = useSelector((state) => state.posts);
  const [editedPost, setEditedPost] = useState(null);
  const [filterType, setFilterType] = useState("noFilter");

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPosts());
    }
  }, [dispatch, status]);

  const userFeed = posts?.filter(
    (item) =>
      user.username === item.username ||
      user.following.some((follower) => follower.username === item.username)
  );

  const filteredPosts = filterPosts(userFeed, filterType);

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
        {status === "pending" ? (
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
              {userFeed?.length !== 0 ? (
                <Box maxW="40rem" m="auto">
                  <SearchUser />
                  <Filters
                    filterType={filterType}
                    setFilterType={setFilterType}
                  />
                  {filterType === "noFilter"
                    ? filteredPosts
                        .reverse()
                        .map((post) => (
                          <PostCard
                            key={post._id}
                            post={post}
                            onOpen={onOpen}
                            setEditedPost={setEditedPost}
                          />
                        ))
                    : filteredPosts.map((post) => (
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
                  minH="calc(95.2vh - 90px)"
                >
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
        ) : null}
      </Box>
    </>
  );
};

export { Home };
