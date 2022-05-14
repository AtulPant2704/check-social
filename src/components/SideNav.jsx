import {
  Heading,
  ListItem,
  UnorderedList,
  ListIcon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";

const SideNav = ({ onOpen }) => {
  return (
    <Flex flexDirection="column" display={{ base: "none", md: "block" }}>
      <Heading color="brand.500">CheckSocial</Heading>
      <UnorderedList listStyleType="none" w="100%" mt="8">
        <ListItem cursor="pointer" fontSize="20px" fontWeight="bold" my="2">
          <ListIcon as={FaHome} />
          Feed
        </ListItem>
        <ListItem cursor="pointer" fontSize="20px" fontWeight="bold" my="2">
          <ListIcon as={MdOutlineExplore} />
          Explore
        </ListItem>
        <ListItem cursor="pointer" fontSize="20px" fontWeight="bold" my="2">
          <ListIcon as={BsFillBookmarkFill} />
          Bookmark
        </ListItem>
        <ListItem cursor="pointer" fontSize="20px" fontWeight="bold" my="2">
          <ListIcon as={FaUserCircle} />
          Profile
        </ListItem>
        <ListItem cursor="pointer" fontSize="20px" fontWeight="bold" my="2">
          <Button variant="solid" w="100%" onClick={onOpen}>
            Post
          </Button>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export { SideNav };
