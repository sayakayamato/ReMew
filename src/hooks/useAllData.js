import { ref, onValue, child } from "firebase/database";
import { db } from "../lib/firebase";

export const useAllData = (tableName) => {
  const rootRef = ref(db);
  const tableRef = child(rootRef, tableName);

  return onValue(tableRef, (snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      // TODO: 例外処理
      console.log("No data available");
    }
  });
};