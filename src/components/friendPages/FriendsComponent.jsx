import React from "react";
import { Avatar } from "@chakra-ui/react";

export function FriendsComponent({ userPhoto, userName }) {
  return (
    <div className="friend_component">
      <div className="friend_photo">
        <Avatar src={userPhoto} />
      </div>
      <div className="friend_name">{userName}</div>
    </div>
  );
}
