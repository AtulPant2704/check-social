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

const ProfileCard = ({ onOpenProfile, userProfile, userpostsLength }) => {
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
        name={userProfile?.firstName + " " + userProfile?.lastName}
        src={userProfile?.avatarUrl}
        size="2xl"
      ></Avatar>
      <Heading as="h5" size="md">
        {userProfile?.firstName} {userProfile?.lastName}
      </Heading>
      <Text>@{userProfile?.username}</Text>
      {userProfile?.username === user.username ? (
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
      ) : user.followers.some(
          (item) => item.username === userProfile?.username
        ) ? (
        <Button variant="outline" my="2">
          Unfollow
        </Button>
      ) : (
        <Button my="2">Follow</Button>
      )}
      <Text>{user.bio}</Text>
      <Link href={userProfile?.website} isExternal color="brand.500">
        {userProfile?.website}
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
            {userProfile?.following.length}
          </Heading>
          <Text>Following</Text>
        </Box>
        <Box>
          <Heading as="h5" size="md" textAlign="center">
            {userpostsLength}
          </Heading>
          <Text>Posts</Text>
        </Box>
        <Box>
          <Heading as="h5" size="md" textAlign="center">
            {userProfile?.followers.length}
          </Heading>
          <Text>Followers</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { ProfileCard };
