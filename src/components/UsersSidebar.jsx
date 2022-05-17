import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Flex,
  Avatar,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { getUsers } from "redux/asyncThunks";

const UsersSidebar = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const otherUsers = users.filter((item) => item.username !== user.username);

  const nonFollowers = otherUsers.filter((item) =>
    item.followers.every((follower) => follower.username !== user.username)
  );

  return (
    <Box
      position="sticky"
      top="16px"
      display={{ base: "none", lg: "block" }}
      bgColor="gray.200"
      h="fit-content"
      minW="fit-content"
      p="4"
      borderRadius="8"
    >
      <Heading as="h3" size="md">
        Suggested Users
      </Heading>
      <UnorderedList listStyleType="none" w="100%" mt="4">
        {nonFollowers.map((user) => (
          <ListItem key={user._id} mb="2">
            <Flex gap="4" alignItems="center">
              <Avatar
                name={user.firstName + " " + user.lastName}
                src={user.avatarUrl}
              />
              <Box>
                <Heading as="h4" size="sm">
                  {user.firstName} {user.lastName}
                </Heading>
                <Text>@{user.username}</Text>
              </Box>
              <Button
                leftIcon={<AiOutlinePlus color="white" />}
                p="2"
                fontSize="14"
              >
                Follow
              </Button>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export { UsersSidebar };
