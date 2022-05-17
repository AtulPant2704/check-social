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
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CommentCard = ({ comment }) => {
  const navigate = useNavigate();

  return (
    <Flex gap="2">
      <Avatar
        name={comment.firstName + " " + comment.lastName}
        src={comment.avatarUrl}
        size="sm"
        cursor="pointer"
        onClick={() => navigate(`/profile/${comment.username}`)}
      />
      <Flex justifyContent="space-between" width="100%">
        <Box>
          <Heading
            as="h5"
            size="sm"
            cursor="pointer"
            onClick={() => navigate(`/profile/${comment.username}`)}
          >
            {comment.firstName} {comment.lastName}
          </Heading>
          <Text>{comment.text}</Text>
        </Box>
      </Flex>
      {/* Edit Comment */}
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
  );
};

export { CommentCard };
