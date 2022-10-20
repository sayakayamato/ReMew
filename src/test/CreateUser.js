import { useState } from "react";
import { useDataCreate } from "../hooks/useDataCreate";

export const CreateUser = () => {
  const placeholder = "ユーザー名を入力";
  const tableName = "users";
  const [username, setUsername] = useState("");

  const dataCreate = useDataCreate;

  const registerUser = () => {
    const struct = {
      username: username,
      imageUrl: "",
      createdAt: new Date().toISOString(),
    };
    dataCreate(tableName, struct);
    setUsername("");
  };

  return (
    <>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder={placeholder}
        style={{ color: "black" }}
      ></input>
      <button
        onClick={registerUser}
        style={{ backgroundColor: "black", color: "white" }}
      >
        {tableName + "に追加"}
      </button>
    </>
  );
};
