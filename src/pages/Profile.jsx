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
            <Heading as="h3" size="md" mb="4">Your Posts</Heading>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
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
