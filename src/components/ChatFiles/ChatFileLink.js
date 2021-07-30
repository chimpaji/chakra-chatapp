import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const ChatFileLink = () => {
  return (
    <HStack w="full" px={8} spacing={1} justify="flex-start" align="flex-start">
      <Box rounded="lg" minH={10} minW={10} bg="gray.100" mt={1} />
      <VStack justify="flex-start" align="start" w="full">
        <HStack justify="space-between" w="full">
          <Text fontSize="md">Facebook.com</Text>
          <Text color="gray.400" fontSize="xs">
            10:99pm
          </Text>
        </HStack>
        <Text fontSize="xs">10.12.2029</Text>
      </VStack>
    </HStack>
  );
};

export default ChatFileLink;
