import { useSelector } from "react-redux";
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

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  const userPosts = posts.filter((post) => post.username === user.username);

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <EditProfileModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
      />
      <Box>
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
            <ProfileCard onOpenProfile={onOpenProfile} />
            <Heading as="h3" size="md" mb="4">
              Your Posts
            </Heading>
            {userPosts.length !== 0 ? (
              userPosts.map((post) => <PostCard key={post._id} post={post} />)
            ) : (
              <Box>
                <Heading as="h3" size="md" testAlign="center">
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
