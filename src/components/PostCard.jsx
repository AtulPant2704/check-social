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
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

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
            src={post.avatarUrl}
          />
          <Heading as="h3" size="md">
            {post.firstName} {post.lastName}
            <Text as="span" fontSize="14px" ml="2">
              @{post.username}
            </Text>
          </Heading>
        </Flex>
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
              <Button leftIcon={<FaRegEdit />} variant="ghost" display="block">
                Edit
              </Button>
              <Button leftIcon={<MdDelete />} variant="ghost">
                Delete
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>

      {/* Post Content */}
      <Box>
        <Text>{post.content}</Text>
      </Box>

      {/* Like and Bookmark */}
      <Flex alignItems="center">
        <IconButton
          icon={<AiOutlineHeart />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          borderRadius="50%"
          _hover={{
            bgColor: "brand.100",
          }}
          _focus={{
            borderColor: "transparent",
          }}
        />
        <Text as="span">{post.likes.likeCount} likes</Text>
        <IconButton
          icon={<BsBookmark />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          borderRadius="50%"
          _hover={{
            bgColor: "brand.100",
          }}
          _focus={{
            borderColor: "transparent",
          }}
        />
      </Flex>

      {/* Comment Input */}
      <CommentInput />

      {/* Comments */}
      {post.comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </Flex>
  );
};

export { PostCard };
