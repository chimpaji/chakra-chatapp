import {
  Flex,
  HStack,
  Input,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

const messages = [
  {
    message: "Hey Travis! Would you like to go out for a coffee?",
    from: "others",
    dateSent: "20:21",
  },
  {
    message: "Sure! At 11:00 am?",
    from: "me",
    dateSent: "20:22",
  },
  {
    message: "That's too early! How about at noon?",
    from: "others",
    dateSent: "20:22",
  },
  {
    message: "That sounds good as well. Where should we meet?",
    from: "me",
    dateSent: "20:23",
  },
  {
    message: "Meet me at the hardware store on 21 Duck Street.",
    from: "others",
    dateSent: "20:23",
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Which one? The developer or the designer?",
    from: "others",
    dateSent: "20:24",
  },
  {
    message: "The developer. You remember Tony, right?",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: "others",
    dateSent: "20:25",
  },
  {
    message: "Indeed he is! Alright, see you later 👋!",
    from: "me",
    dateSent: "20:25",
  },
];

const Chat = () => {
  return (
    <Flex w="full" flexDirection="column">
      <HStack px={4} py={4} borderBottomColor="gray.100" borderBottomWidth={1}>
        <Input
          placeholder="Search friends here"
          variant="filled"
          rounded="full"
        />
      </HStack>
      <Flex px={6} overflowY="auto" flexDirection="column" flex={1}>
        <Stat mt={6}>
          <StatLabel color="gray.500">Chatting with</StatLabel>
          <StatNumber>AomAom NumChoke</StatNumber>
        </Stat>
      </Flex>
    </Flex>
  );
};

export default Chat;
