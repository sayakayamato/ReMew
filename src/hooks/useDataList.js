import {
  ref,
  onValue,
  child,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";

export const useDataList = (tableName, queryKey, queryValue) => {
  const [data, setData] = useState();
  // const [errors, setErrors] = useState(null);

  useEffect(() => {
    const rootRef = ref(db);
    const tableRef = child(rootRef, tableName);
    // クエリ処理
    const listRef = query(
      tableRef,
      orderByChild(queryKey),
      equalTo(queryValue)
    );

    onValue(listRef, (snapshot) => {
      const newData = snapshot.val();
      // TODO: Need to Fix Bug
      // questionsのidと取得配列のid（配列内の番号）が一致する時.
      // オブジェクト型から配列型になってしまう（idの省略が行われる）
      // questionsのidをユニークにすると解決するはず

      // 配列型になっているとき、混じってしまっているempty型を取り除く
      // console.log("test");
      // console.log(newData);
      // if(Array.isArray(newData)){
      //   console.log("newData")
      //   console.log(newData)
      //   // let newObject = {}
      //   newData = newData.map((data)=>{
      //     if (typeof(data)!=="empty"){
      //       console.log(data)
      //       return data
      //     }else{
      //       return
      //     }
      //   }).filter((e) => typeof e !== "undefined")
      // }
      // console.log("newData")
      // console.log(newData)

      setData(newData == null ? {} : newData);
    });
  }, []);

  return { data };
};
