import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaBell, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ChatFile from "./Chatfile";
import ChatFileLink from "./ChatFileLink";

const index = () => {
  return (
    <VStack h="full" flexDirection="column" align="center" w="full" pt={8}>
      <HStack justify="space-between" w="full" px={8} mb={8}>
        <Text color="gray.500">20 March 2021</Text>
        <IconButton
          rounded="full"
          icon={<FaBell />}
          color="gray.500"
          variant="ghost"
        />
      </HStack>
      <Avatar size="2xl" name="AomAom Numchoke">
        <AvatarBadge bg="green.400" borderWidth={4} boxSize={8} />
      </Avatar>
      <Heading size="md" name="AomAom Numchoke">
        AomAom NumChoke
      </Heading>
      <HStack px={8} justify="center" spacing={3} mt={6}>
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
      <Box px={8} w="full">
        <Divider mt={6} color="gray.100" />
      </Box>
      <VStack w="full" overflowY="auto" spacing={6}>
        <HStack px={8} w="full" mt={6} justify="space-between">
          <Heading size="md">Shared files</Heading>
          <Button fontWeight="normal" variant="text" size="xs" color="blue">
            see all
          </Button>
        </HStack>
        <List spacing={4} mt={6} w="full">
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
        </List>
        <Box px={8} w="full">
          <Divider mt={6} color="gray.100" />
        </Box>
        <HStack px={8} w="full" mt={6} justify="space-between">
          <Heading size="md">Share links</Heading>
          <Button fontWeight="normal" variant="text" size="xs" color="blue">
            see all
          </Button>
        </HStack>
        <List spacing={4} mt={6} w="full">
          <ListItem>
            <ChatFileLink />
          </ListItem>
          <ListItem>
            <ChatFileLink />
          </ListItem>
        </List>
      </VStack>
    </VStack>
  );
};

export default index;
