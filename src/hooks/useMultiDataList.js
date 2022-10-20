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

export const useMultiDataList = (tableName, queryKey, queryValueList) => {
  const [data, setData] = useState([]);
  // const [errors, setErrors] = useState(null);

  useEffect(() => {
    const rootRef = ref(db);
    const tableRef = child(rootRef, tableName);
    const dataArray = []

    for (let i = 0; i < queryValueList.length; i++) {
      // クエリ処理
      const listRef = query(
        tableRef,
        orderByChild(queryKey),
        equalTo(queryValueList[i])
      );
      onValue(listRef, (snapshot) => {
        const newData = snapshot.val();
        newData &&
          dataArray.push(newData)
      });
    }
    setData(dataArray)
  }, []);

  return { data };
};
