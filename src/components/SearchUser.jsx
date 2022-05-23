import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { useEffect } from "react";

const SearchUser = () => {
  const navigate = useNavigate();
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    const foundUsers = users.filter(
      (user) =>
        user.firstName.includes(searchQuery) ||
        user.lastName.includes(searchQuery) ||
        user.username.includes(searchQuery)
    );
    setSearchedUsers(foundUsers);
  }, [users, searchQuery]);

  return (
    <Box position="relative">
      <InputGroup display="flex" alignItems="center">
        <InputLeftElement children={<ImSearch />} />
        <Input
          placeholder="Search User"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
      {searchedUsers.length > 0 && searchQuery.length > 0 ? (
        <Flex
          flexDirection="column"
          gap="2"
          mt="2"
          position="absolute"
          bgColor="white"
          width="100%"
          zIndex="1"
          p="1"
          borderColor="gray.50"
          borderRadius="8"
        >
          {searchedUsers.map((user) => (
            <Flex
              key={user._id}
              cursor="pointer"
              alignItems="center"
              gap="2"
              onClick={() => navigate(`/profile/${user.username}`)}
            >
              <Avatar
                name={user.firstName + " " + user.lastName}
                src={user.avatarUrl}
                size="sm"
              />
              <Box>
                <Heading as="h4" size="sm">
                  {user.firstName + " " + user.lastName}
                </Heading>
                <Text>@{user.username}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      ) : null}
    </Box>
  );
};

export { SearchUser };
