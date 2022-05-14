import {
  Heading,
  Flex,
  Avatar,
  Box,
  Text,
  IconButton,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PostCard = () => {
  return (
    <Flex
      flexDirection="column"
      gap="2"
      mb="8"
      bgColor="gray.200"
      borderRadius="8"
      p="4"
    >
      {/* Avatar and Name */}
      <Flex justifyContent="space-between">
        <Flex gap="2" alignItems="center">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Heading as="h3" size="md">
            Atul Pant
            <Text as="span" fontSize="14px" ml="2">
              @Atul27
            </Text>
          </Heading>
        </Flex>
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

      {/* Post Content */}
      <Box>
        <Text>
          All platforms are essentially no code tools. Facebook, Reddit,
          Twitter, GitHub.. gives you power to create your properties on
          Internet.
        </Text>
      </Box>

      {/* Like and Bookmark */}
      <Flex>
        <IconButton
          icon={<AiOutlineHeart />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          _hover={{
            bgColor: "transparent",
          }}
        />
        <IconButton
          icon={<BsBookmark />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          _hover={{
            bgColor: "transparent",
          }}
        />
      </Flex>

      {/* Comment Input */}
      <Flex gap="2">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
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

      {/* Comments */}
      <Flex gap="2">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
        <Flex justifyContent="space-between" width="100%">
          <Box>
            <Heading as="h5" size="sm">
              Atul Pant
            </Heading>
            <Text>This is first comment.</Text>
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
      <Flex gap="2">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
        <Flex justifyContent="space-between" width="100%">
          <Box>
            <Heading as="h5" size="sm">
              Atul Pant
            </Heading>
            <Text>This is first comment.</Text>
          </Box>
        </Flex>
        <IconButton
          icon={<BsThreeDotsVertical />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          _hover={{
            bgColor: "transparent",
          }}
        >
          {" "}
        </IconButton>
      </Flex>
      <Flex gap="2">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
        <Flex justifyContent="space-between" width="100%">
          <Box>
            <Heading as="h5" size="sm">
              Atul Pant
            </Heading>
            <Text>This is first comment.</Text>
          </Box>
        </Flex>
        <IconButton
          icon={<BsThreeDotsVertical />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          _hover={{
            bgColor: "transparent",
          }}
        >
          {" "}
        </IconButton>
      </Flex>
    </Flex>
  );
};

export { PostCard };
