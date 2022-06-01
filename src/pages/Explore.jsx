import { useState, useEffect, useRef } from "react";
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
import { getPosts } from "services";

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postsLoader, setPostsLoader] = useState(false);
  const [editedPost, setEditedPost] = useState(null);
  const loader = useRef(null);

  useEffect(() => {
    const elementRef = loader.current;
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageNumber((prev) => ++prev);
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
    getPosts(pageNumber, setPosts, setPostsLoader);
  }, [pageNumber]);

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
            <Box minW="36rem" maxW="40rem">
              <SearchUser />
              {posts?.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  onOpen={onOpen}
                  setEditedPost={setEditedPost}
                />
              ))}
              <Box ref={loader} w="100%" h="50px"></Box>
              {postsLoader ? (
                <Flex justifyContent="center">
                  <CircularProgress
                    isIndeterminate
                    color="brand.500"
                    size="40px"
                    thickness="20px"
                  />
                </Flex>
              ) : null}
            </Box>
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
      </Box>
    </>
  );
};

export { Explore };
