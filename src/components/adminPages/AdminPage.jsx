import { useState } from "react";
import { useFirebase } from "../../hooks/useFirebase";
import Select from "react-select";
import { useDataCreate } from "../../hooks/useDataCreate";
import { Link } from "react-router-dom";

export const AdminPage = () => {
  const [inputQuestionCategoryId, setinputQuestionCategoryId] = useState();
  const [inputQuestionSample, setInputQuestionSample] = useState();
  const [inputProfCategoryId, setinputProfCategoryId] = useState();
  const [inputProfSample, setInputProfSample] = useState();

  const dataCreate = useDataCreate;

  const { data: questionCategory } = useFirebase("questionCategory");
  const questionOption = questionCategory
    ? Object.entries(questionCategory).map(([key, item]) => ({
        value: key,
        label: item.content,
      }))
    : [];
  const { data: profCategory } = useFirebase("profCategory");
  const profOption = profCategory
    ? Object.entries(profCategory).map(([key, item]) => ({
        value: key,
        label: item.content,
      }))
    : [];

  const addCategory = (selected, content, setCategoryId) => {
    if (!content) return;
    const data = {
      content: content,
      createdAt: new Date().toISOString(),
    };
    const tableName = selected;
    dataCreate(tableName, data);
    setCategoryId();
  };
  const addSample = (
    selected,
    categoryId,
    content,
    setCategoryId,
    setSample
  ) => {
    if (!categoryId) return;
    if (!content) return;
    const data = {
      categoryId: categoryId,
      content: content,
      createdAt: new Date().toISOString(),
    };
    const tableName = selected;
    dataCreate(tableName, data);
    setCategoryId();
    setSample();
  };

  return (
    <>
      <div>
        <Link to="/">戻る</Link>
      </div>
      <div>
        <p>募集型質問</p>
        <div style={{ margin: "24px", border: "black" }}>
          <p>質問カテゴリの追加</p>
          <div>
            <input
              placeholder="カテゴリを入力"
              type="text"
              onChange={(e) => setinputQuestionCategoryId(e.target.value)}
            />
            <button
              onClick={() =>
                addCategory(
                  "questionCategory",
                  inputQuestionCategoryId,
                  setinputQuestionCategoryId
                )
              }
            >
              追加
            </button>
          </div>
        </div>
        <div style={{ margin: "24px", border: "black" }}>
          <p>質問サンプルの追加</p>
          <div>
            <Select
              options={questionOption}
              onChange={(e) => setinputQuestionCategoryId(e.value)}
            />
            <input
              placeholder="質問を入力"
              type="textr"
              onChange={(e) => setInputQuestionSample(e.target.value)}
            />
            <button
              onClick={() =>
                addSample(
                  "questionSamples",
                  inputQuestionCategoryId,
                  inputQuestionSample,
                  setinputQuestionCategoryId,
                  setInputQuestionSample
                )
              }
            >
              追加
            </button>
          </div>
        </div>
        <p>プロフ質問</p>
        <div style={{ margin: "24px", border: "black" }}>
          <p>プロフカテゴリの追加</p>
          <div>
            <input
              placeholder="カテゴリを入力"
              type="text"
              onChange={(e) => setinputProfCategoryId(e.target.value)}
            />
            <button
              onClick={() =>
                addCategory(
                  "profCategory",
                  inputProfCategoryId,
                  setinputProfCategoryId
                )
              }
            >
              追加
            </button>
          </div>
        </div>
        <div style={{ margin: "24px", border: "black" }}>
          <p>プロフ質問の追加</p>
          <div>
            <Select
              options={profOption}
              onChange={(e) => setinputProfCategoryId(e.value)}
            />
            <input
              placeholder="質問を入力"
              type="text"
              onChange={(e) => setInputProfSample(e.target.value)}
            />
            <button
              onClick={() =>
                addSample(
                  "profSamples",
                  inputProfCategoryId,
                  inputProfSample,
                  setinputProfCategoryId,
                  setInputProfSample
                )
              }
            >
              追加
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
