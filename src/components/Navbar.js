import React from "react";
import { VStack, IconButton, Tooltip, Icon } from "@chakra-ui/react";
import { MdDashboard, MdSearch, MdNotifications, MdMail } from "react-icons/md";
import { HiLightningBolt, HiTag } from "react-icons/hi";
import { GiSpiderFace } from "react-icons/gi";

const Navbar = () => {
  return (
    <VStack p={6} justify="space-between" alignItems="center" w="full">
      {/* Icon with tool tip */}
      <VStack>
        <IconButton color="gray.500" icon={<GiSpiderFace />} />
        <Tooltip label="Dashboard" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdDashboard />}
            aria-label="Dashboard"
          />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiLightningBolt />}
            aria-label="Actions"
          />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdSearch />}
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdNotifications />}
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Tags" placement="right">
          <IconButton color="gray.500" icon={<HiTag />} aria-label="Tags" />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdMail />}
            aria-label="Messages"
          />
        </Tooltip>
      </VStack>
    </VStack>
  );
};

export default Navbar;
