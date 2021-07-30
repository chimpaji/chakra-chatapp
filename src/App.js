import { Flex, HStack, useDisclosure } from "@chakra-ui/react";
import Chat from "./components/Chat/index";
import ChatFile from "./components/ChatFiles";
import ChatFileDrawer from "./components/ChatFiles/ChatFileDrawer";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatHistoryDrawer from "./components/ChatHistory/ChatHistoryDrawer";
import Navbar from "./components/Navbar";

function App() {
  const {
    isOpen: isChatHistoryOpen,
    onOpen: onChatHistoryOpen,
    onClose: onChatHistoryClose,
  } = useDisclosure();

  const {
    isOpen: isChatFileOpen,
    onOpen: onChatFileOpen,
    onClose: onChatFileClose,
  } = useDisclosure();
  return (
    <HStack h="100vh" spacing={0}>
      <Flex h="full" as="nav" maxW={16} w="full" bg="gray.100">
        <Navbar />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW={{ base: "xs", xl: "sm" }}
        display={{ base: "none", xl: "flex" }}
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
        <Chat
          onChatHistoryOpen={onChatHistoryOpen}
          onChatFileOpen={onChatFileOpen}
        />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW={{ base: "xs", xl: "sm" }}
        display={{ base: "none", xl: "flex" }}
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <ChatFile />
      </Flex>
      <ChatHistoryDrawer
        isOpen={isChatHistoryOpen}
        onClose={onChatHistoryClose}
      />
      <ChatFileDrawer isOpen={isChatFileOpen} onClose={onChatFileClose} />
    </HStack>
  );
}

export default App;
