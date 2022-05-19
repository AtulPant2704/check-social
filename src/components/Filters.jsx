import { Flex, Box, Button } from "@chakra-ui/react";

const Filters = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="gray.200"
      borderRadius="8"
      mb="8"
    >
      <Box w="50%" textAlign="center">
        <Button variant="ghost" fontSize="xl" color="brand.500">
          Trending
        </Button>
      </Box>
      <Box w="50%" textAlign="center">
        <Button variant="ghost" fontSize="xl" color="brand.500">
          By Date
        </Button>
      </Box>
    </Flex>
  );
};

export { Filters };
