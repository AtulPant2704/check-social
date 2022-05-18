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
  Flex,
  FormLabel,
  Input,
  ButtonGroup,
  IconButton,
  Box,
  useToast,
} from "@chakra-ui/react";
import { BsCardImage } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { saveImageToCloudinary } from "services";
import { addPost, editPost } from "redux/asyncThunks";

const PostModal = ({ isOpen, onClose, editedPost, setEditedPost }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { token } = useSelector((state) => state.auth);
  const [postImg, setPostImg] = useState({
    imageUrl: editedPost?.img || "",
    imageFile: {},
  });
  const [post, setPost] = useState({ content: editedPost?.content || "" });

  let reader = new FileReader();

  const addImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPostImg({ imageUrl: reader.result, imageFile: e.target.files[0] });
      }
    };
  };

  const editPostHandler = async () => {
    if (postImg.imageUrl !== "" && postImg.imageUrl !== editedPost.img) {
      await saveImageToCloudinary(postImg.imageFile, setPost);
    }
    const postData = {
      _id: editedPost._id,
      content: post.content,
      img: post.avatarImg || postImg.imageUrl || null,
    };

    const response = await dispatch(editPost({ postData, token }));
    if (response?.payload.status === 201) {
      toast({
        description: "Post successfully edited",
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
    modalCloseHandler();
  };

  const addPostHandler = async () => {
    if (postImg.imageUrl !== "") {
      await saveImageToCloudinary(postImg.imageFile, setPost);
    }
    const postData = {
      content: post.content,
      img: post.avatarImg || postImg.imageUrl || null,
    };

    const response = await dispatch(addPost({ postData, token }));
    if (response?.payload.status === 201) {
      toast({
        description: "Post successfully added",
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
    modalCloseHandler();
  };

  const modalCloseHandler = () => {
    setPost({ content: "" });
    setPostImg({ imageUrl: "", imageFile: {} });
    setEditedPost({ content: "", img: "" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Post</ModalHeader>
        <ModalCloseButton onClick={modalCloseHandler} />
        <ModalBody size="lg">
          <Textarea
            placeholder="Here is a sample placeholder"
            size="lg"
            resize="none"
            value={post.content}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="space-between" w="100%" alignItems="center">
            <Box>
              <FormLabel cursor="pointer">
                <Input
                  type="file"
                  position="absolute"
                  opacity="0"
                  bgColor="red.100"
                  p="0"
                  visibility="hidden"
                  onChange={addImageHandler}
                />
                <BsCardImage fontSize="28px" />
              </FormLabel>
              {postImg.imageUrl !== "" ? (
                <ButtonGroup size="sm" isAttached variant="outline">
                  <Button
                    _hover={{
                      borderColor: "initial",
                    }}
                    _active={{
                      borderColor: "initial",
                    }}
                  >
                    Image
                  </Button>
                  <IconButton
                    aria-label="Add to friends"
                    icon={<GrFormClose />}
                    fontSize="25px"
                    onClick={() => setPostImg({ imageUrl: "", imageFile: {} })}
                  />
                </ButtonGroup>
              ) : null}
            </Box>
            <Button
              onClick={
                editedPost.content || editedPost.img
                  ? editPostHandler
                  : addPostHandler
              }
            >
              POST
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { PostModal };
