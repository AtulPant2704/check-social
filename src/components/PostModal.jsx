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
} from "@chakra-ui/react";

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
          <Button onClose={onClose}>POST</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { PostModal };
