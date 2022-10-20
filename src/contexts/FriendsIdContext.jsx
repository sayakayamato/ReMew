import { useContext, createContext, useState } from "react";

const FriendsIdContext = createContext();

export const useFriendsIdContext = () => {
  return useContext(FriendsIdContext);
};

export const FriendsIdProvider = ({ children }) => {
  const [friendsId, setFriendsId] = useState();
  const context = {
    friendsId,
    setFriendsId,
  };
  return (
    <FriendsIdContext.Provider value={context}>
      {children}
    </FriendsIdContext.Provider>
  );
};
