import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Flex, Box, Heading, useDisclosure } from "@chakra-ui/react";
import {
  SideNav,
  PostCard,
  UsersSidebar,
  MobileNav,
  PostModal,
  ProfileCard,
  EditProfileModal,
} from "components";
import { getSingleUser, getUserPosts } from "services";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const { username } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [editedPost, setEditedPost] = useState(null);

  useEffect(() => {
    getSingleUser(setUserProfile, username);
    getUserPosts(setUserPosts, username);
  }, [username, posts, users]);

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
      {isOpenProfile && (
        <EditProfileModal
          isOpenProfile={isOpenProfile}
          onCloseProfile={onCloseProfile}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      )}
      <Box>
        <Flex justifyContent="center" bgColor="gray.200">
          <Heading
            position="sticky"
            top="16px"
            color="brand.500"
            display={{ base: "block", md: "none" }}
            py="1"
          >
            CheckSocial
          </Heading>
        </Flex>
        <Flex
          backgroundColor="bg"
          w="90%"
          mx="auto"
          my="4"
          gap="10"
          minH="calc(95.8vh - 90px)"
        >
          <SideNav onOpen={onOpen} />
          <Box maxW="40rem">
            <ProfileCard
              onOpenProfile={onOpenProfile}
              userProfile={userProfile}
              userpostsLength={userPosts?.length}
            />
            <Heading as="h3" size="md" mb="4">
              Your Posts
            </Heading>
            {userPosts?.length > 0 ? (
              [...userPosts]
                ?.reverse()
                .map((post) => (
                  <PostCard
                    key={post._id}
                    post={post}
                    setEditedPost={setEditedPost}
                    onOpen={onOpen}
                  />
                ))
            ) : (
              <Box>
                <Heading as="h3" size="md" textAlign="center">
                  Nothing has been posted by your yet, Start posting and make
                  friends.
                </Heading>
              </Box>
            )}
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

export { Profile };
