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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { EditCommentModal } from "./EditCommentModal";
import { deleteComment } from "redux/asyncThunks";

const CommentCard = ({ comment, postId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [editedComment, setEditedComment] = useState("");
  const [commentId, setCommentId] = useState(null);

  const callEditCommentHandler = () => {
    setCommentId(comment._id);
    setEditedComment(comment.commentData);
    onOpen();
  };

  const deleteCommentHandler = async () => {
    const response = await dispatch(
      deleteComment({ postId, commentId: comment._id, token })
    );
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

  return (
    <>
      {isOpen ? (
        <EditCommentModal
          isOpen={isOpen}
          onClose={onClose}
          editedComment={editedComment}
          setEditedComment={setEditedComment}
          commentId={commentId}
          setCommentId={setCommentId}
          postId={postId}
        />
      ) : null}
      <Flex gap="2" alignItems="center">
        <Avatar
          name={comment.firstName + " " + comment.lastName}
          src={
            comment.username === user.username
              ? user.avatarUrl
              : comment.avatarUrl
          }
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
            <Text>{comment.commentData}</Text>
          </Box>
        </Flex>
        {/* Edit Comment */}
        {user.username === comment.username ? (
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
                  onClick={callEditCommentHandler}
                >
                  Edit
                </Button>
                <Button
                  leftIcon={<MdDelete />}
                  variant="ghost"
                  onClick={deleteCommentHandler}
                >
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>
    </>
  );
};

export { CommentCard };
