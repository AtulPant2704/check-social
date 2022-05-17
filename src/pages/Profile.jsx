import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const [loader, setLoader] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    getSingleUser(setUserProfile, username, setLoader);
    getUserPosts(setUserPosts, username, setLoader);
  }, [username]);

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      {userProfile && (
        <EditProfileModal
          isOpenProfile={isOpenProfile}
          onCloseProfile={onCloseProfile}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      )}
      <Box>
        {loader ? (
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
                position="sticky"
                top="16px"
                color="brand.500"
                display={{ base: "block", md: "none" }}
              >
                CheckSocial
              </Heading>
            </Flex>
            <Flex backgroundColor="bg" w="90%" mx="auto" my="4" gap="10">
              <SideNav onOpen={onOpen} />
              <Box>
                <ProfileCard
                  onOpenProfile={onOpenProfile}
                  userProfile={userProfile}
                  userpostsLength={userPosts?.length}
                />
                <Heading as="h3" size="md" mb="4">
                  Your Posts
                </Heading>
                {userPosts?.length !== 0 ? (
                  userPosts?.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))
                ) : (
                  <Box>
                    <Heading as="h3" size="md" textAlign="center">
                      Nothing has been posted by your yet, Start posting and
                      make friends.
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
          </>
        )}
      </Box>
    </>
  );
};

export { Profile };
