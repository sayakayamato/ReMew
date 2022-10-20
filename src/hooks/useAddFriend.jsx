import { useDataCreate } from "./useDataCreate";

export const useAddFriend = (
  loggedInUserId,
  friendUserId,
  loggedInUserName,
  friendUserName,
  loggedInUserPhotoUrl,
  friendUserPhotoUrl
) => {
  const dataCreate = useDataCreate;

  // TODO: 既に追加した人は追加しない
  // const pathRef = ref(db, "friends/" + user.uid);
  // const userDoc = await onValue(pathRef,()=> {});

  // console.log(userDoc);
  // if (!userDoc.exists) {
  //   await set(pathRef, {
  //     userId: user.uid,
  //     displayName: user.displayName,
  //     // created_at: firebaes.firebase.FieldValue.serverTimestamp(),
  //   });
  // }

  const friendUserData = {
    userId: friendUserId,
    userName: friendUserName,
    userPhoto: friendUserPhotoUrl,
  };
  const loggedInUserData = {
    userId: loggedInUserId,
    userName: loggedInUserName,
    userPhoto: loggedInUserPhotoUrl,
  };

  const tableLoggedIn = `friends/${loggedInUserId}`;
  dataCreate(tableLoggedIn, friendUserData);

  const tableFriend = `friends/${friendUserId}`;
  dataCreate(tableFriend, loggedInUserData);
};
