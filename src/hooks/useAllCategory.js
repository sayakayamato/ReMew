import { ref, onValue, child } from "firebase/database";
import { db } from "../lib/firebase";

export const useAllCategory = async (tableName) => {
  const rootRef = ref(db);
  const tableRef = child(rootRef, tableName);

  return onValue(tableRef, (snapshot) => {
    if (snapshot.exists()) {
      const tmpData = snapshot.val();
      const categoryIds = [];
      const categoryList = [];

      Object.keys(tmpData).forEach((key) => {
        categoryIds.push(key);
        categoryList.push(tmpData[key].content);
      });

      return { categoryIds, categoryList };
    } else {
      // TODO: 例外処理
      console.log("No data available");
    }
  });
};
