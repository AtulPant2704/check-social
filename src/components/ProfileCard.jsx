import { useState } from "react";
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
import { logoutUser, updateUser } from "redux/slices";
import { followUser, unfollowUser } from "redux/asyncThunks";

const ProfileCard = ({
  onOpenProfile,
  userProfile,
  userpostsLength,
  onOpenFollower,
  setFollowModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [disableFollowBtn, setDisableFollowBtn] = useState(false);

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const unfollowUserHandler = async (followUserId) => {
    setDisableFollowBtn(true);
    const response = await dispatch(unfollowUser({ followUserId, token }));
    setDisableFollowBtn(false);
    dispatch(updateUser(response?.payload.data.user));
  };

  const followUserHandler = async (followUserId) => {
    setDisableFollowBtn(true);
    const response = await dispatch(followUser({ followUserId, token }));
    setDisableFollowBtn(false);
    dispatch(updateUser(response?.payload.data.user));
  };

  const followerModalHandler = (type) => {
    setFollowModal(type);
    onOpenFollower();
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
            variant="solid"
            backgroundColor="red.500"
            color="white"
            fontSize="xl"
            icon={<MdLogout />}
            onClick={logoutHandler}
            _hover={{
              backgroundColor: "red.400",
            }}
            _focus={{
              backgroundColor: "red.400",
            }}
            _active={{
              backgroundColor: "red.400",
            }}
          ></IconButton>
        </Flex>
      ) : user.following.some(
          (item) => item.username === userProfile?.username
        ) ? (
        <Button
          variant="outline"
          my="2"
          onClick={() => unfollowUserHandler(userProfile._id)}
          isLoading={disableFollowBtn}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          my="2"
          onClick={() => followUserHandler(userProfile._id)}
          isLoading={disableFollowBtn}
        >
          Follow
        </Button>
      )}
      <Text>{userProfile?.bio}</Text>
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
        <Box cursor="pointer" onClick={() => followerModalHandler("Following")}>
          <Heading as="h5" size="md" textAlign="center">
            {userProfile?.following?.length}
          </Heading>
          <Text>Following</Text>
        </Box>
        <Box>
          <Heading as="h5" size="md" textAlign="center">
            {userpostsLength}
          </Heading>
          <Text>Posts</Text>
        </Box>
        <Box cursor="pointer" onClick={() => followerModalHandler("Followers")}>
          <Heading as="h5" size="md" textAlign="center">
            {userProfile?.followers?.length}
          </Heading>
          <Text>Followers</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { ProfileCard };
