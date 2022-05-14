import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Avatar,
  Box,
  Input,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";

const EditProfileModal = ({ isOpenProfile, onCloseProfile }) => {
  return (
    <Modal isOpen={isOpenProfile} onClose={onCloseProfile}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="10" mb="2">
            <Text>Avatar</Text>
            <Box position="relative">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="md"
              ></Avatar>
              <Box position="absolute" top="54%" left="59%">
                <FormLabel cursor="pointer">
                  <Input
                    type="file"
                    position="absolute"
                    opacity="0"
                    bgColor="red.100"
                    p="0"
                    visibility="hidden"
                  />
                  <AiFillCamera fontSize="20px" color="white" />
                </FormLabel>
              </Box>
            </Box>
          </Flex>
          <Flex gap="10" mb="2">
            <Text>Name</Text>
            <Text>Atul Pant</Text>
          </Flex>
          <Flex gap="3" mb="2">
            <Text>Username</Text>
            <Text>Atul27</Text>
          </Flex>
          <Flex gap="6" mb="2">
            <Text>Website</Text>
            <Input
              placeholder="https://adarshbalika.netlify.app/"
              borderColor="var(--chakra-colors-gray-300)"
              size="sm"
              borderRadius="8"
            ></Input>
          </Flex>
          <Flex gap="14" mb="2">
            <Text>Bio</Text>
            <Textarea
              placeholder="An aspiring web developer"
              resize="none"
              _hover={{
                borderColor: "brand.400",
              }}
            ></Textarea>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onCloseProfile}>Update</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditProfileModal };
