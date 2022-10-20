import { FriendsComponent } from "./FriendsComponent";
import { useAuthContext } from "../../contexts/AuthContext";
import { useFirebase } from "../../hooks/useFirebase";
import { useFriendsListContext } from "../../contexts/FriendsListContext";
import { useEffect } from "react";

export function FriendsContents() {
  const { user } = useAuthContext();
  const { setFriendsList } = useFriendsListContext();
  const tableName = "friends/" + user.uid;
  const { data } = useFirebase(tableName);
  const friendArr = data && Object.entries(data).map(([key, item]) => {
    return { key: key, item: item };
  });
  useEffect(() => {
    setFriendsList(friendArr ? friendArr : []);
  }, [data]);
  return (
    <ul style={{ listStyle: "none" }}>
      {data &&
        Object.entries(data).map(([key, item]) => {
          return (
            <li key={key}>
              <FriendsComponent
                userPhoto={item.userPhoto}
                userName={item.userName}
              />
            </li>
          );
        })}
    </ul>
  );
}
