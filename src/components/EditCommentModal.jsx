import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { editComment } from "redux/asyncThunks";

const EditCommentModal = ({
  isOpen,
  onClose,
  editedComment,
  setEditedComment,
  commentId,
  setCommentId,
  postId,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { token } = useSelector((state) => state.auth);
  const [commentData, setCommentData] = useState(editedComment || "");

  const editCommentHandler = async () => {
    if (commentData === "") {
      toast({
        description: "Comment cannot be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {
      const response = await dispatch(
        editComment({ postId, commentId, commentData, token })
      );
      if (response?.payload.status === 201) {
        toast({
          description: "Comment has been edited",
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
      closeHandler();
    }
  };

  const closeHandler = () => {
    setEditedComment("");
    setCommentId(null);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Comment</ModalHeader>
          <ModalCloseButton onClick={closeHandler} />
          <ModalBody>
            <Textarea
              placeholder="Here is a sample placeholder"
              size="md"
              resize="none"
              value={commentData}
              onChange={(e) => setCommentData(e.target.value)}
            ></Textarea>
          </ModalBody>
          <ModalFooter>
            <Button onClick={editCommentHandler}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { EditCommentModal };
