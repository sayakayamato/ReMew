import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useMultiDataList } from "../../hooks/useMultiDataList";
import { useAuthContext } from "../../contexts/AuthContext";

export const FeedComponent = ({ friendsId }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  console.log(friendsId)

  const multiDataList = useMultiDataList;
  const tableName = "questions";
  const queryKey = "userId";

  const friendsList = friendsId ? friendsId : []
  const queryValueList = [user.uid, ...friendsList];
  const { data: feedContents } = multiDataList(
    tableName,
    queryKey,
    queryValueList
  );
  console.log("queryValueList");
  console.log(queryValueList.length);
  console.log(queryValueList);
  //クリックされた質問判定
  const WhatFeed = (e) => {
    //配列のキーとidが一致してるときにできる処理...
    const pushQuestionID = e.target.id;
    const whatfeedtext = e.target.innerText; //記入した質問本文を定数に入れる
    navigate(`/chats/${pushQuestionID}`, {
      state: { whatfeedtext: whatfeedtext, pushQuestionID: pushQuestionID },
    }); //ページ遷移と共に値を持っていく
  };

  console.log("feedContents");
  console.log(feedContents);

  if (feedContents) {
    if (feedContents.length === 0) {
      return (
        <>
          <p>投稿がありません</p>
          <p>右下のボタンから投稿するか</p>
          <p>Friendタブから友達追加しましょう</p>
        </>
      );
    } else {
      return feedContents.map(
        (data) =>
          data &&
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
      );
    }
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
};
