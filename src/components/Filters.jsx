import { Flex, Box, Button } from "@chakra-ui/react";

const Filters = ({ filterType, setFilterType }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="gray.200"
      borderRadius="8"
      mb="8"
    >
      <Box
        w="52%"
        textAlign="center"
        borderRight="4px solid var(--chakra-colors-blue-500)"
      >
        <Button
          variant="ghost"
          fontSize="xl"
          color="brand.500"
          _hover={{
            bgColor: "transparent",
          }}
          _active={{
            bgColor: "transparent",
            border: "none",
          }}
          _focus={{
            bgColor: "transparent",
            border: "none",
          }}
          onClick={() =>
            filterType === "trending"
              ? setFilterType("noFilter")
              : setFilterType("trending")
          }
        >
          Trending
        </Button>
      </Box>
      <Box w="48%" textAlign="center">
        <Button
          variant="ghost"
          fontSize="xl"
          color="brand.500"
          _hover={{
            bgColor: "transparent",
          }}
          _active={{
            bgColor: "transparent",
            border: "none",
          }}
          _focus={{
            bgColor: "transparent",
            border: "none",
          }}
          onClick={() => setFilterType("oldestByDate")}
        >
          By Date
        </Button>
      </Box>
    </Flex>
  );
};

export { Filters };
