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
} from "@chakra-ui/react";
import { BsCardImage } from "react-icons/bs";

const PostModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody size="lg">
          <Textarea
            placeholder="Here is a sample placeholder"
            size="lg"
            resize="none"
          />
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="space-between" w="100%" alignItems="center">
            <FormLabel cursor="pointer">
              <Input
                type="file"
                position="absolute"
                opacity="0"
                bgColor="red.100"
                p="0"
                visibility="hidden"
              />
              <BsCardImage fontSize="28px" />
            </FormLabel>
            <Button onClose={onClose}>POST</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { PostModal };
