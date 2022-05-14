import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Flex,
  Avatar,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const UsersSidebar = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      bgColor="gray.200"
      h="fit-content"
      minW="fit-content"
      p="4"
      borderRadius="8"
    >
      <Heading as="h3" size="md">
        Suggested Users
      </Heading>
      <UnorderedList listStyleType="none" w="100%" mt="4">
        <ListItem mb="2">
          <Flex gap="4" alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Heading as="h4" size="sm">
                Atul Pant
              </Heading>
              <Text>@Atul27</Text>
            </Box>
            <Button
              leftIcon={<AiOutlinePlus color="white" />}
              p="2"
              fontSize="14"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
        <ListItem mb="2">
          <Flex gap="4" alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Heading as="h4" size="sm">
                Atul Pant
              </Heading>
              <Text>@Atul27</Text>
            </Box>
            <Button
              leftIcon={<AiOutlinePlus color="white" />}
              p="2"
              fontSize="14"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
        <ListItem mb="2">
          <Flex gap="4" alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Heading as="h4" size="sm">
                Atul Pant
              </Heading>
              <Text>@Atul27</Text>
            </Box>
            <Button
              leftIcon={<AiOutlinePlus color="white" />}
              p="2"
              fontSize="14"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
        <ListItem mb="2">
          <Flex gap="4" alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Heading as="h4" size="sm">
                Atul Pant
              </Heading>
              <Text>@Atul27</Text>
            </Box>
            <Button
              leftIcon={<AiOutlinePlus color="white" />}
              p="2"
              fontSize="14"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
        <ListItem mb="2">
          <Flex gap="4" alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box>
              <Heading as="h4" size="sm">
                Atul Pant
              </Heading>
              <Text>@Atul27</Text>
            </Box>
            <Button
              leftIcon={<AiOutlinePlus color="white" />}
              p="2"
              fontSize="14"
            >
              Follow
            </Button>
          </Flex>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export { UsersSidebar };
