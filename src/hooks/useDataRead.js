import { ref, get, child } from "firebase/database";
import { db } from "../lib/firebase";

export const useDataRead = async (tableName, id) => {
  const dbRef = ref(db);
  // console.log(dbRef)
  return (
    get(child(dbRef, tableName + "/" + id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          return snapshot.val();
        } else {
          // TODO: 例外処理
          console.log("No data available");
        }
      })
      // TODO: 例外処理
      .catch((err) => console.log(err))
  );
};
