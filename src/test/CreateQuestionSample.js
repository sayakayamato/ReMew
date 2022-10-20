import { useState } from "react";
import { useDataCreate } from "../hooks/useDataCreate";

export const CreateQuestionSample = () => {
  const placeholder = "カテゴリ名を入力";
  const tableName = "questionSamples";
  const [questionSample, setQuestionSample] = useState("");

  const dataCreate = useDataCreate;

  const registerCategory = () => {
    const struct = {
      content: questionSample,
      categoryId: "-ND6kWHwg-PWK8lXxXUk", // おすすめ質問のカテゴリID
    //   categoryId: "-ND6kYYwekWn66fY90LB", // 就活のカテゴリID
    //   categoryId: "-ND6k_2UE0MS45etiEM9", // 恋愛のカテゴリID
    //   categoryId: "-ND6kadngpM5IA_8SrYE", // 遊びのカテゴリID
      createdAt: new Date().toISOString(),
    };
    dataCreate(tableName, struct);
    setQuestionSample("");
  };

  return (
    <>
      <input
        onChange={(e) => setQuestionSample(e.target.value)}
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
