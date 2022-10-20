import { ref, push } from "firebase/database";
import { db } from "../lib/firebase";

export const useDataCreate = async (tableName, struct) => {
  return await push(ref(db, tableName), struct).then((res) => res.key);
  // .then((res) =>
  //   // alert("登録完了しました！")
  // );
};
