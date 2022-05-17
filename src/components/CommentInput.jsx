import { useSelector } from "react-redux";
import {
  Flex,
  Avatar,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";

const CommentInput = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Flex gap="2">
      <Avatar
        name={user.firstName + " " + user.lastName}
        src={user.avatarUrl}
        size="sm"
      />
      <InputGroup size="sm">
        <Input
          borderRadius="4"
          placeholder="Add a comment"
          borderColor="gray.500"
        />
        <InputRightElement mr="2">
          <Button
            variant="ghost"
            _hover={{
              bgColor: "transparent",
            }}
          >
            POST
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export { CommentInput };
