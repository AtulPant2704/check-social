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
import { setBtnLoading } from "redux/slices";

const PostModal = ({ isOpen, onClose, editedPost, setEditedPost }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { token } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.posts);
  const [postImg, setPostImg] = useState({
    imageUrl: editedPost?.img || "",
    imageFile: {},
  });
  const [post, setPost] = useState({ content: editedPost?.content || "" });

  let reader = new FileReader();

  const addImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onprogress = () => {
      if (e.target.files[0].size <= 5242880) {
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPostImg({
              imageUrl: reader.result,
              imageFile: e.target.files[0],
            });
          }
        };
      } else {
        toast({
          description: "File size should be less than 5MB",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
        reader.abort();
        setPostImg({
          imageUrl: "",
          imageFile: {},
        });
      }
    };
  };

  const saveEditPostHandler = async (data) => {
    try {
      const postData = {
        _id: editedPost._id,
        content: data.content,
        img: data.img || null,
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
    } catch (error) {
      console.error(error);
    }
  };

  const editPostHandler = async () => {
    if (postImg.imageUrl !== "" && postImg.imageUrl !== editedPost.img) {
      dispatch(setBtnLoading());
      const type = postImg.imageUrl.includes("video") ? "video" : "image";
      await saveImageToCloudinary(
        postImg.imageFile,
        saveEditPostHandler,
        post,
        type,
        "post"
      );
    } else if (post.content !== "") {
      saveEditPostHandler(post);
    } else {
      toast({
        description: "Post can't be blank",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const saveAddPostHandler = async (data) => {
    try {
      const response = await dispatch(addPost({ postData: data, token }));
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
    } catch (error) {
      console.error(error);
    }
  };

  const addPostHandler = async () => {
    if (postImg.imageUrl !== "") {
      dispatch(setBtnLoading());
      const type = postImg.imageUrl.includes("video") ? "video" : "image";
      await saveImageToCloudinary(
        postImg.imageFile,
        saveAddPostHandler,
        post,
        type,
        "post"
      );
    } else if (post.content !== "") {
      saveAddPostHandler(post);
    } else {
      toast({
        description: "Post can't be blank",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
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
                  accept="image/*,video/*"
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
                    {postImg.imageUrl.includes("video") ? "Video" : "Image"}
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
              isLoading={isLoading}
              onClick={
                editedPost?.content || editedPost?.img
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
