import { useNavigate } from "react-router-dom";
import {
  Heading,
  Flex,
  Avatar,
  Box,
  Text,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

const ProfileCard = ({ onOpenProfile }) => {
  const navigate = useNavigate();

  return (
    <>
      <Flex bgColor="gray.200" mb="8" p="4" borderRadius="8">
        <Flex gap="2">
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="lg"
          ></Avatar>
          <Box>
            <Heading as="h5" size="md">
              Atul Pant
            </Heading>
            <Text>@Atul27</Text>
            <Text>An aspiring web developer</Text>
            <Flex gap="4">
              <Text>2 posts</Text>
              <Text>2 followers</Text>
              <Text>2 following</Text>
            </Flex>
            <Link
              href="https://adarshbalika.netlify.app/"
              isExternal
              color="brand.500"
            >
              https://adarshbalika.netlify.app/
            </Link>
          </Box>
        </Flex>
        <Flex gap="2">
          <Button variant="solid" onClick={onOpenProfile}>
            Edit
          </Button>
          <IconButton
            variant="outline"
            icon={<MdLogout />}
            onClick={() => navigate("/")}
          ></IconButton>
        </Flex>
      </Flex>
    </>
  );
};

export { ProfileCard };
