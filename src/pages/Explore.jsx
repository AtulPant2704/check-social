import { useState, useEffect, useRef } from "react";
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
  SearchUser,
} from "components";
import { getPosts } from "redux/asyncThunks";
import { getSlicedPosts } from "services";

const Explore = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [slicedPosts, setSlicedPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postsLoader, setPostsLoader] = useState(false);
  const [editedPost, setEditedPost] = useState(null);
  const [pageEnd, setPageEnd] = useState(false);
  const loader = useRef(null);
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    const elementRef = loader.current;
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNumber((prev) => prev + 1);
      }
    };
    const observer = new IntersectionObserver(handleObserver);
    if (elementRef) {
      observer.observe(elementRef);
    }
    return () => {
      observer.unobserve(elementRef);
    };
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPosts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (!pageEnd) {
      getSlicedPosts(
        pageNumber,
        setSlicedPosts,
        setPostsLoader,
        setPageEnd,
        posts
      );
    }
  }, [pageNumber, pageEnd]);

  const filteredPosts = !pageEnd
    ? posts.filter((post) => slicedPosts.some((item) => item._id === post._id))
    : posts;

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
            <Box
              minH="calc(100vh - 98px)"
              maxW="40rem"
              minW={{ base: "auto", md: "36rem" }}
              m="auto"
              pb="20"
            >
              <SearchUser />
              <Box mt="8">
                {filteredPosts?.map((post) => (
                  <PostCard
                    key={post._id}
                    post={post}
                    onOpen={onOpen}
                    setEditedPost={setEditedPost}
                  />
                ))}
                {postsLoader && !pageEnd ? (
                  <Flex justifyContent="center" mb="40px">
                    <CircularProgress
                      isIndeterminate
                      color="brand.500"
                      size="40px"
                      thickness="20px"
                    />
                  </Flex>
                ) : null}
                {filteredPosts.length > 0 && pageEnd ? (
                  <Flex justifyContent="center">
                    <Heading as="h3" size="md">
                      No more posts to display
                    </Heading>
                  </Flex>
                ) : null}
                <Box ref={loader} w="100%" h="10px"></Box>
              </Box>
            </Box>
            <UsersSidebar />
          </Flex>
          <Box
            position="fixed"
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
      </Box>
    </>
  );
};

export { Explore };
