import { Flex, Box, Button, Select } from "@chakra-ui/react";
import { AiTwotoneFire } from "react-icons/ai";

const Filters = ({ filterType, setFilterType }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="gray.200"
      borderRadius="8"
      my="8"
      overflow="hidden"
    >
      <Box
        w="52%"
        textAlign="center"
        borderRight="4px solid #1d9bf0"
        bgColor={filterType === "trending" ? "brand.500" : " gray.200"}
      >
        <Button
          leftIcon={<AiTwotoneFire />}
          variant="ghost"
          w="100%"
          fontSize="xl"
          color={filterType === "trending" ? "gray.200" : "brand.500"}
          _hover={{
            bgColor: "transparent",
          }}
          _active={{
            bgColor: "transparent",
          }}
          _focus={{
            bgColor: "transparent",
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
      <Box
        w="48%"
        textAlign="center"
        bgColor={
          filterType === "oldestByDate" || filterType === "newestByDate"
            ? "brand.500"
            : "gray.200"
        }
      >
        <Select
          placeholder="Random Date"
          textAlign="center"
          fontSize="lg"
          fontWeight="var(--chakra-fontWeights-semibold)"
          onChange={(e) => setFilterType(e.target.value)}
          color={
            filterType === "oldestByDate" || filterType === "newestByDate"
              ? "gray.200"
              : "brand.500"
          }
        >
          <option value="oldestByDate">Oldest First</option>
          <option value="newestByDate">Newest First</option>
        </Select>
      </Box>
    </Flex>
  );
};

export { Filters };
