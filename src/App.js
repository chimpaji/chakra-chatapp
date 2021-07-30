import { Flex, HStack } from "@chakra-ui/react";
import Chat from "./components/Chat";
import ChatHistory from "./components/ChatHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HStack h="100vh" spacing={0}>
      <Flex h="full" as="nav" maxW={16} w="full" bg="gray.100">
        <Navbar />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW="sm"
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
        p={4}
      >
        <ChatHistory />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <Chat />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW="sm"
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
      />
    </HStack>
  );
}

export default App;
