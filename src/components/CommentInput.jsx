import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Flex,
  Avatar,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { addComment } from "redux/asyncThunks";

const CommentInput = ({ postId }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { user, token } = useSelector((state) => state.auth);
  const [commentData, setCommentData] = useState("");
  const [commentBtnDisable, setCommentBtnDisable] = useState(false);

  const addCommentHandler = async () => {
    if (commentData === "") {
      toast({
        description: "Comment cannot be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {
      const response = await dispatch(
        addComment({ postId, commentData, token, setCommentBtnDisable })
      );
      if (response?.payload.status === 201) {
        toast({
          description: "Comment has been added",
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
      setCommentData("");
    }
  };

  return (
    <Flex gap="2">
      <Avatar
        name={user.firstName + " " + user.lastName}
        src={user.avatarUrl}
        size="sm"
      />
      <InputGroup size="sm">
        <Input
          pr="12"
          borderRadius="4"
          placeholder="Add a comment"
          borderColor="gray.500"
          value={commentData}
          onChange={(e) => setCommentData(e.target.value)}
        />
        <InputRightElement mr="2">
          <Button
            variant="ghost"
            _hover={{
              bgColor: "transparent",
            }}
            cursor={commentData !== "" ? "pointer" : "not-allowed"}
            onClick={commentData !== "" ? addCommentHandler : null}
            opacity={commentData === "" ? "0.5" : "1"}
            isLoading={commentBtnDisable}
          >
            POST
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export { CommentInput };
