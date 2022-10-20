import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useDataList } from "../../hooks/useDataList";
import { useAuthContext } from "../../contexts/AuthContext";

export function FeedbackContents() {
  const { user } = useAuthContext();
  const logedInUserId = user.uid;
  // const logedInUsername = user.displayName;

  const friendList = [logedInUserId];

  // TODO: コンポーネント化
  const dataList = useDataList;
  const tableName = "questions";
  const queryKey = "userId";

  const feedContents = friendList
    .map((friendId) => {
      const queryValue = friendId;
      const { data } = dataList(tableName, queryKey, queryValue);
      if (!data) {
        return;
      } else {
        return data;
      }
      // return queryValue;
    })
    .filter((e) => typeof e !== "undefined");

  const navigate = useNavigate();
  const NewFeedContents = () => navigate("/CollectFeedback");
  //クリックされた質問判定
  const WhatFeed = (e) => {
    //配列のキーとidが一致してるときにできる処理...
    const pushQuestionID = e.target.id;
    const whatfeedtext = e.target.innerText; //記入した質問本文を定数に入れる
    navigate(`/Chats/${pushQuestionID}`, {
      state: { whatfeedtext: whatfeedtext, pushQuestionID: pushQuestionID },
    }); //ページ遷移と共に値を持っていく
  };

  return (
    <>
      {" "}
      {feedContents.map((data) =>
        Object.entries(data).map(([key, item]) => {
          return (
            <Box
              className="feed_box"
              bg={"rgba(255, 255, 255, 0.7)"}
              w="100%"
              p={4}
              color="black"
              mb={5}
              key={key}
            >
              <p className="feed_user_name">{item.username}</p>
              <p className="feed_contents_text" onClick={WhatFeed} id={key}>
                {item.content}
              </p>
            </Box>
          );
        })
      )}
      <button onClick={NewFeedContents}>+</button>
    </>
  );
}
