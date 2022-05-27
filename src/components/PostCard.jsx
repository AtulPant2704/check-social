import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Flex,
  Avatar,
  Box,
  Text,
  IconButton,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Image,
  useToast,
  AspectRatio,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BsBookmark,
  BsThreeDotsVertical,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";
import {
  deletePost,
  likePost,
  dislikePost,
  addToBookmark,
  removeFromBookmark,
} from "redux/asyncThunks";

const PostCard = ({ post, onOpen, setEditedPost }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { user, token, bookmarks } = useSelector((state) => state.auth);
  const [likeDisable, setLikeDisable] = useState(false);
  const [bookmarkDisable, setBookmarkDisable] = useState(false);

  const deletePostHandler = async (post) => {
    const response = await dispatch(deletePost({ post, token }));
    if (response?.payload.status === 201) {
      toast({
        description: "Post successfully deleted",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        description: `${response.payload.data.errors[0]}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const callEditPostHandler = (post) => {
    setEditedPost(post);
    onOpen();
  };

  const isLiked = post?.likes.likedBy.some(
    (currUser) => currUser._id === user._id
  );

  const isBookmarked = bookmarks.some((curr) => curr === post._id);

  const likeHandler = async (postId) => {
    isLiked
      ? await dispatch(dislikePost({ postId, token, setLikeDisable }))
      : await dispatch(likePost({ postId, token, setLikeDisable }));
  };

  const bookmarkHandler = async (postId) => {
    isBookmarked
      ? await dispatch(
          removeFromBookmark({ postId, token, setBookmarkDisable })
        )
      : await dispatch(addToBookmark({ postId, token, setBookmarkDisable }));
  };

  const getPostDate = (date) => {
    let postDate = new Date(date);
    postDate = postDate.toDateString().split(" ").slice(1, 4).join(" ");
    return postDate.slice(0, 6) + "," + postDate.slice(6);
  };

  const getLikeMessage = () => {
    if (post?.likes.likeCount === 1) {
      return `Liked by ${post.likes.likedBy[0].username}`;
    }
    return `Liked by ${post.likes.likedBy[0].username} and ${
      post.likes.likeCount - 1
    } others`;
  };

  const imageFileFormats = ["jpg", "jpeg", "png", "gif", "webp"];

  return (
    <Flex
      flexDirection="column"
      gap="2"
      mb="8"
      bgColor="gray.200"
      borderRadius="8"
      p="4"
    >
      {/* Avatar and Name */}
      <Flex justifyContent="space-between">
        <Flex
          gap="2"
          alignItems="center"
          cursor="pointer"
          onClick={() => navigate(`/profile/${post.username}`)}
        >
          <Avatar
            name={post.firstName + " " + post.lastName}
            src={
              post.username === user.username ? user.avatarUrl : post.avatarUrl
            }
          />
          <Heading as="h3" size="md">
            {post.firstName} {post.lastName}
            <Text as="span" fontSize="14px" ml="2" color="gray.600">
              {getPostDate(post.createdAt)}
            </Text>
            <Text fontSize="14px" color="gray.600" pt="1">
              @{post.username}
            </Text>
          </Heading>
        </Flex>
        {user.username === post.username ? (
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDotsVertical />}
                bgColor="transparent"
                color="black"
                size="sm"
                fontSize="lg"
                _hover={{
                  bgColor: "transparent",
                }}
                _active={{
                  bgColor: "transparent",
                  border: "none",
                }}
                _focus={{
                  bgColor: "transparent",
                  border: "none",
                }}
              ></IconButton>
            </PopoverTrigger>
            <PopoverContent maxW="fit-content">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Button
                  leftIcon={<FaRegEdit />}
                  variant="ghost"
                  display="block"
                  onClick={() => callEditPostHandler(post)}
                >
                  Edit
                </Button>
                <Button
                  leftIcon={<MdDelete />}
                  variant="ghost"
                  onClick={() => deletePostHandler(post)}
                >
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>

      {/* Post Content */}
      <Box>
        <Text pb="2">{post.content}</Text>
        {post?.img &&
        !imageFileFormats.some((format) => post.img.includes(format)) ? (
          <AspectRatio maxW="560px" ratio={4 / 3}>
            <video controls src={post.img}></video>
          </AspectRatio>
        ) : (
          <Image src={post.img}></Image>
        )}
      </Box>

      {/* Like and Bookmark */}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <IconButton
            icon={isLiked ? <FcLike /> : <AiOutlineHeart />}
            bgColor="transparent"
            color={isLiked ? "red.500" : "black"}
            size="sm"
            fontSize="lg"
            borderRadius="50%"
            _hover={{
              bgColor: "red.100",
            }}
            _focus={{
              bgColor: "red.100",
              borderColor: "transparent",
            }}
            _active={{
              bgColor: "red.100",
              borderColor: "transparent",
            }}
            onClick={() => likeHandler(post._id)}
            isLoading={likeDisable}
          />
          {post.likes.likeCount > 0 ? (
            <Text as="span">{getLikeMessage()}</Text>
          ) : null}
        </Flex>
        <IconButton
          icon={isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          borderRadius="50%"
          _hover={{
            bgColor: "red.100",
          }}
          _focus={{
            bgColor: "red.100",
            borderColor: "transparent",
          }}
          _active={{
            bgColor: "red.100",
            borderColor: "transparent",
          }}
          onClick={() => bookmarkHandler(post._id)}
          isLoading={bookmarkDisable}
        />
      </Flex>

      {/* Comment Input */}
      <CommentInput postId={post._id} />

      {/* Comments */}
      {post?.comments?.map((comment) => (
        <CommentCard key={comment._id} comment={comment} postId={post._id} />
      ))}
    </Flex>
  );
};

export { PostCard };
