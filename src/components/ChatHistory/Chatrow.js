import { Text, Box, Flex, VStack, Heading } from "@chakra-ui/react";
import React from "react";

const Chatrow = () => {
  return (
    <Flex
      w="full"
      px={8}
      py={4}
      alignItem="center"
      borderBottomColor="gray.100"
      borderWidth={1}
      _hover={{ bg: "gray.50", cursor: "pointer" }}
    >
      <Box rounded="full" bg="gray.100" minW={14} minH={14} />
      <VStack
        overflow="hidden"
        flex={1}
        ml={3}
        spacing={0}
        alignItems="flex-start"
      >
        <Heading fontSize={12} w="full">
          Champ Chimpaji
        </Heading>
        <Text
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          w="full"
          fontSize="xs"
          color="gray.500"
        >
          Sample text goes here asfasd asdfasdf asdf asdfdsf
        </Text>
      </VStack>
      <Text ml={3} fontSize="xs" color="gray.500">
        09:30
      </Text>
    </Flex>
  );
};

export default Chatrow;
