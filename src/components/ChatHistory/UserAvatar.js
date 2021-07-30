import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";
import React from "react";

const UserAvatar = ({ name }) => {
  return (
    <Tooltip label={name}>
      <Avatar name={name}>
        <AvatarBadge bg="green.400" boxSize={5} borderWidth={4} />
      </Avatar>
    </Tooltip>
  );
};

export default UserAvatar;
