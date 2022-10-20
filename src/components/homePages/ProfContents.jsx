import { useState } from "react";
import { Input } from "@chakra-ui/react";

import { useDataList } from "../../hooks/useDataList";
import { useDataCreate } from "../../hooks/useDataCreate";

import "../../css/Chats.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useFriendsIdContext } from "../../contexts/FriendsIdContext";

export function ProfContents({ profId, profText, categoryId }) {
  const [inputChatText, setInputChatText] = useState("");
  const dataCreate = useDataCreate;
  const tableName = "profs";
  const { user } = useAuthContext();

  const dataList = useDataList;

  const { friendsId } = useFriendsIdContext();

  const tmpArr = [];
  const listId = [user.uid, ...friendsId]

  for (let i = 0; i < listId.length; i++) {
    const queryKey = "combProfUserId";
    const queryValue = profId + listId[i];
    const { data: response } = dataList(tableName, queryKey, queryValue);
    response && tmpArr.push(response);
  }

  const onClickSend = () => {
    if (inputChatText === "") return;
    // データ保存処理
    const newChatObject = {
      content: inputChatText,
      profId: profId,
      resUserId: user.uid,
      resUsername: user.displayName,
      categoryId: categoryId,
      profContent: profText,
      combProfUserId: profId + user.uid,
      combCatgoryUserId: categoryId + user.uid,
      createdAt: new Date().toISOString(),
    };
    const tableName = "profs";
    dataCreate(tableName, newChatObject);
    setInputChatText("");
  };

  return (
    <>
      <div className="chats_answer">
        {tmpArr &&
          tmpArr.map((data) => {
            return Object.entries(data).map(([key, item]) => {
              return (
                <div
                  key={key}
                  className={item.resUserId === user.uid ? "right" : "left"}
                >
                  <p className="chat_send_user">{item.resUsername}</p>
                  <p className="chat_send_text">{item.content}</p>
                </div>
              );
            });
          })}
      </div>
      <div className="send_feeld">
        <div className="send_form">
          <Input
            placeholder="プロフに回答"
            value={inputChatText}
            onChange={(e) => setInputChatText(e.target.value)}
            w={"85%"}
          />
          <button onClick={onClickSend} className="chat_send_button">
            送信
          </button>
        </div>
      </div>
    </>
  );
}
