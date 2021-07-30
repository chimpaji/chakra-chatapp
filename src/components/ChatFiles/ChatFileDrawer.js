import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import ChatFile from "./index";

const ChatFileDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <ChatFile />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatFileDrawer;
