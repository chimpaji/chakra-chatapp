import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ChatBubble = ({ message, from, dateSent }) => {
  const isMe = from === "me";
  const alignment = isMe ? "flex-end" : "flex-start";
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;
  return (
    <VStack mt={6} align={alignment}>
      <Box
        bg="gray.500"
        px={6}
        py={4}
        maxW={80}
        borderTopRightRadius={32}
        borderTopLeftRadius={32}
        borderBottomRightRadius={bottomRightRadius}
        borderBottomLeftRadius={bottomLeftRadius}
      >
        {message}
      </Box>
      <Text fontSize="xs">{dateSent}</Text>
    </VStack>
  );
};

export default ChatBubble;
