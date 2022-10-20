import { useContext, createContext, useState } from "react";

const FriendsListContext = createContext();

export const useFriendsListContext = () => {
  return useContext(FriendsListContext);
};

export const FriendsListProvider = ({ children }) => {
  const [friendsList, setFriendsList] = useState();
  const context = {
    friendsList,
    setFriendsList,
  };

  return (
    <FriendsListContext.Provider value={context}>
      {children}
    </FriendsListContext.Provider>
  );
};
