import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Flex,
  Avatar,
  Box,
  Text,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { logoutUser } from "redux/slices";

const ProfileCard = ({ onOpenProfile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Flex flexDirection="column" alignItems="center" mb="8">
      <Avatar
        name={user.firstName + " " + user.lastName}
        src={user.avatarUrl}
        size="2xl"
      ></Avatar>
      <Heading as="h5" size="md">
        {user.firstName} {user.lastName}
      </Heading>
      <Text>@{user.username}</Text>
      <Flex alignItems="center" gap="2">
        <Button my="2" onClick={onOpenProfile}>
          Edit Profile
        </Button>
        <IconButton
          variant="outline"
          icon={<MdLogout />}
          onClick={logoutHandler}
        ></IconButton>
      </Flex>
      <Text>{user.bio}</Text>
      <Link href={user.website} isExternal color="brand.500">
        {user.website}
      </Link>
      <Flex
        gap="4"
        bgColor="gray.200"
        w="fit-content"
        p="4"
        borderRadius="8"
        mt="4"
      >
        <Box>
          <Heading as="h5" size="md" textAlign="center">
            2
          </Heading>
          <Text>Following</Text>
        </Box>
        <Box>
          <Heading as="h5" size="md" textAlign="center">
            2
          </Heading>
          <Text>Posts</Text>
        </Box>
        <Box>
          <Heading as="h5" size="md" textAlign="center">
            2
          </Heading>
          <Text>Followers</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { ProfileCard };
