import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { getUsers, followUser } from "redux/asyncThunks";
import { updateUser } from "redux/slices";

const UsersSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { user, token } = useSelector((state) => state.auth);

  const followUserHandler = async (followUserId) => {
    const response = await dispatch(followUser({ followUserId, token }));
    dispatch(updateUser(response?.payload.data.user));
  };

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
                cursor="pointer"
                onClick={() => navigate(`/profile/${user.username}`)}
              />
              <Box
                cursor="pointer"
                onClick={() => navigate(`/profile/${user.username}`)}
              >
                <Heading as="h4" size="sm">
                  {user.firstName} {user.lastName}
                </Heading>
                <Text>@{user.username}</Text>
              </Box>
              <Button
                leftIcon={<AiOutlinePlus color="white" />}
                p="2"
                fontSize="14"
                onClick={() => followUserHandler(user._id)}
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
