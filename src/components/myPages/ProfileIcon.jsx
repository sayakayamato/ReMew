import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import "../../css/ProfileInfo.css";
import { useAuthContext } from "../../contexts/AuthContext";

export function ProfileIcon() {
  const { user } = useAuthContext();
  return (
    <>
      <Wrap>
        <WrapItem>
          <Avatar name={user.displayName} src={user.photoURL} size="xl" />
        </WrapItem>
      </Wrap>
    </>
  );
}
