import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeedComponent } from "./FeedComponent";
import { useAuthContext } from "../../contexts/AuthContext";
import { useFirebase } from "../../hooks/useFirebase";
import { useFriendsIdContext } from "../../contexts/FriendsIdContext";

export function FeedContents() {
  const navigate = useNavigate();
  const NewFeedContents = () => navigate("/CollectFeedback");
  const { friendsId, setFriendsId } = useFriendsIdContext();
  // const [ friendsList, setFriendsList ] = useState()
  const { user } = useAuthContext();
  const { data } = useFirebase(`friends/${user.uid}`);
  useEffect(() => {
    const userList = data
      ? Object.entries(data).map(([key, item]) => {
          return item.userId;
        })
      : "";
      // setFriendsList([...userList])
    setFriendsId([...userList]);
  }, [data]);

  return (
    <>
      <FeedComponent friendsId={friendsId} />
      <button onClick={NewFeedContents} className="feed_add_button">
        +
      </button>
    </>
  );
}
