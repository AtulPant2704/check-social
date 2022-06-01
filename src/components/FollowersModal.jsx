import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  ListItem,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const FollowersModal = ({
  isOpenFollower,
  onCloseFollower,
  followModal,
  userProfile,
}) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpenFollower} onClose={onCloseFollower}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{followModal}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList listStyleType="none" w="100%">
            {followModal === "Followers" ? (
              userProfile.followers.length > 0 ? (
                userProfile.followers.map((item) => (
                  <ListItem
                    key={item._id}
                    mb="4"
                    pr="4"
                    cursor="pointer"
                    onClick={() => navigate(`/profile/${item.username}`)}
                  >
                    <Flex alignItems="center" gap="2">
                      <Avatar
                        name={item.firstName + " " + item.lastName}
                        src={item.avatarUrl}
                      />
                      <Box>
                        <Heading as="h4" size="sm">
                          {item.firstName} {item.lastName}
                        </Heading>
                        <Text>@{item.username}</Text>
                      </Box>
                    </Flex>
                  </ListItem>
                ))
              ) : (
                <ListItem mb="4" pr="4">
                  <Heading as="h4" size="sm" display="inline">
                    {userProfile.firstName} {userProfile.lastName}
                  </Heading>{" "}
                  does not have any followers
                </ListItem>
              )
            ) : userProfile.following.length > 0 ? (
              userProfile.following.map((item) => (
                <ListItem
                  key={item._id}
                  mb="4"
                  pr="4"
                  cursor="pointer"
                  onClick={() => navigate(`/profile/${item.username}`)}
                >
                  <Flex alignItems="center" gap="2">
                    <Avatar
                      name={item.firstName + " " + item.lastName}
                      src={item.avatarUrl}
                    />
                    <Box>
                      <Heading as="h4" size="sm">
                        {item.firstName} {item.lastName}
                      </Heading>
                      <Text>@{item.username}</Text>
                    </Box>
                  </Flex>
                </ListItem>
              ))
            ) : (
              <ListItem mb="4" pr="4">
                <Heading as="h4" size="sm" display="inline">
                  {userProfile.firstName} {userProfile.lastName}
                </Heading>{" "}
                does not follows anyone
              </ListItem>
            )}
          </UnorderedList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { FollowersModal };
