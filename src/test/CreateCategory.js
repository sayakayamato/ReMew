import { useState } from "react";
import { useDataCreate } from "../hooks/useDataCreate";

export const CreateCategory = () => {
  const placeholder = "カテゴリ名を入力";
  const tableName = "questionCategory";
  const [categoryName, setCategoryName] = useState("");

  const dataCreate = useDataCreate;

  const registerCategory = () => {
    const struct = {
      content: categoryName,
      createdAt: new Date().toISOString(),
    };
    dataCreate(tableName, struct);
    setCategoryName("");
  };

  return (
    <>
      <input
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder={placeholder}
        style={{ color: "black" }}
      ></input>
      <button
        onClick={registerCategory}
        style={{ backgroundColor: "black", color: "white" }}
      >
        {tableName + "に追加"}
      </button>
    </>
  );
};
