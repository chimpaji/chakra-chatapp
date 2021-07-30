import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Chatrow from "./Chatrow";
import UserAvatar from "./UserAvatar";

const onlineFriends = [
  "Lazar Nikolov",
  "Mark Chandler",
  "Segun Adebayo",
  "Tim Kolberger",
  "Folasade Agbaje",
  "Alex Gerrit",
  "Jason Hughes",
  "Jonathan Bakebwa",
  "Tioluwani Kolawole",
];

const ChatHistory = () => {
  return (
    <VStack h="full" alignItems="center" w="full" spacing={6}>
      <Flex
        w="full"
        flexDirection="column"
        alignItems="center"
        justify="flex-start"
      >
        <Avatar name="Champ Chimpaji" size="2xl" mb={2}>
          <AvatarBadge bg="green.400" boxSize={8} borderWidth={4} />
        </Avatar>
        <HStack>
          <IconButton
            icon={<FaFacebook />}
            rounded="full"
            variant="ghost"
            h={10}
            arial-label="Facebook Account"
          />
          <IconButton
            icon={<FaInstagram />}
            rounded="full"
            variant="ghost"
            h={10}
            arial-label="Instagram Account"
          />
          <IconButton
            icon={<FaTwitter />}
            rounded="full"
            variant="ghost"
            h={10}
            arial-label="Twitter Account"
          />
        </HStack>
      </Flex>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <HStack px={8} w="full" justify="space-between">
        <Heading size="xs">Friends Online</Heading>
        <Text fontSize="xs">23</Text>
      </HStack>
      <HStack
        overflowX="scroll"
        minH={24}
        px={8}
        w="full"
        justify="flex-start"
        spacing={3}
      >
        {onlineFriends.map((friend) => (
          <UserAvatar name={friend} key={friend} />
        ))}
      </HStack>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <Box w="full" px={8}>
        <Heading size={3}>Chats</Heading>
        <Input placeholder="Search Chat" rounded="full" minH={10} mt={2} />
      </Box>
      <Box w="full" overflowY="auto">
        <List w="full" spacing={0}>
          <ListItem>
            <Chatrow />
          </ListItem>
          <ListItem>
            <Chatrow />
          </ListItem>
          <ListItem>
            <Chatrow />
          </ListItem>
          <ListItem>
            <Chatrow />
          </ListItem>
          <ListItem>
            <Chatrow />
          </ListItem>
          <ListItem>
            <Chatrow />
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
};

export default ChatHistory;
