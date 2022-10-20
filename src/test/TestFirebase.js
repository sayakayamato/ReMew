// import { useState, useNavigate } from "react";
// import FirebaseLogin from "../components/FirebaseLogin";
// // import { useFirebase } from "../hooks/useFirebase";
// import { useDataList } from "../hooks/useDataList";
// import { auth } from "../lib/firebase";
// import { CreateCategory } from "./CreateCategory";
// import { CreateQuestionSample } from "./CreateQuestionSample";
// import { CreateUser } from "./CreateUser";

// import { onAuthStateChanged } from "firebase/auth";

// import { useDataCreate } from "../hooks/useDataCreate";
// import { useDataRead } from "../hooks/useDataRead";
// import { useDataList } from "../hooks/useDataList";
// import { useAllData } from "../hooks/useAllData";
// import { useAllCategory } from "../hooks/useAllCategory";
// import { CategoryList } from "../components/CategoryList";

// const List = ({ data }) => {
//   const navigate = useNavigate();
//   const WhatCategory = (e) => {
//     console.log(e.target.innerText);
//     const clickCategory = e.target.innerText;
//     navigate("/QuestionDetailPage", { state: clickCategory });
//   };
//   return;
// };

// export const TestFirebase = () => {
//   const [inputValue, setInputValue] = useState("");

//   const allCategory = useAllCategory;
//   const allData = useAllData;
//   const dataList = useDataList;
//   const dataRead = useDataRead;
//   const dataCreate = useDataCreate;

//   const saveName = async () => {
//     const { categoryIds, categoryList } = await allCategory("questionCategory");
//     console.log(categoryIds);
//     console.log(categoryList);
//     カテゴリ名などの全てのデータを取得
//     const data = await allData("questionCategory/")
//     検索してリスト形式での取得
//     const data = await dataList("questionSamples/", "id", 1)
//     該当idのデータ取得
//     const data = await dataRead("users/", "7")
//     新規データの登録
//     await dataCreate(
//       // test data
//       "users/",
//       "7",
//       { imageUrl: "", username: "Yua" }
//     );
//   };

//   const { data } = useFirebase("questionCategory");
//   const { data } = useDataList("questionSamples", "id", 1);
//   console.log(data);
//   const addNewItem = () => {};

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(uid);
//     } else {
//       console.log("ログインしてください");
//     }
//   });

//   return (
//     <>
//       <div style={{ backgroundColor: "white", color: "black" }}>
//         <p>TestFirebase</p>
//         <input
//           style={{ backgroundColor: "gray" }}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="input your name"
//         ></input>
//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             marginLeft: "6px",
//           }}
//           onClick={() => {
//             saveName();
//           }}
//         >
//           ボタン
//         </button>
//         <></>
//       </div>
//       <FirebaseLogin />
//       <CreateUser />
//       <br />
//       <CreateCategory />
//       <br />
//       <CreateQuestionSample/>
//     </>
//   );
// };
