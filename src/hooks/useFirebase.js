import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../lib/firebase";

export const useFirebase = (path) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const pathRef = ref(db, path);
    onValue(
      pathRef,
      (snapshot) => {
        const newData = snapshot.val();
        setData(newData);
      },
      (error) => {
        setErrors(error);
      }
    );
  }, [path]);

  const addItem = (newItem) => {};

  return { data, errors, addItem };
};
