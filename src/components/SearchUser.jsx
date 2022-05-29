import { useState, useEffect, useRef } from "react";
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

const SearchUser = () => {
  const navigate = useNavigate();
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkDebounce, setCheckDebounce] = useState(false);
  const timerRef = useRef();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    clearTimeout(timerRef.current);
    setCheckDebounce(false);
    timerRef.current = setTimeout(() => {
      const foundUsers = users.filter(
        (user) =>
          searchQuery.length !== 0 &&
          (user.firstName.includes(searchQuery) ||
            user.lastName.includes(searchQuery) ||
            user.username.includes(searchQuery))
      );
      setSearchedUsers(foundUsers);
      setCheckDebounce(true);
    }, 300);
  }, [searchQuery, users]);

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
          border="1px solid var(--chakra-colors-gray-200)"
          borderRadius="8"
        >
          {searchedUsers.map((user) => (
            <Flex
              key={user._id}
              cursor="pointer"
              alignItems="center"
              gap="2"
              px="2"
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
      ) : checkDebounce &&
        searchedUsers.length === 0 &&
        searchQuery.length > 0 ? (
        <Flex
          flexDirection="column"
          gap="2"
          mt="2"
          position="absolute"
          bgColor="white"
          width="100%"
          zIndex="1"
          p="1"
          border="1px solid var(--chakra-colors-gray-200)"
          borderRadius="8"
        >
          <Heading as="h4" size="sm" p="2">
            No User present
          </Heading>
        </Flex>
      ) : null}
    </Box>
  );
};

export { SearchUser };
