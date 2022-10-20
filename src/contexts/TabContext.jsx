import { useContext, createContext, useState } from "react";

const TabContext = createContext();

export const useTabContext = () => {
  return useContext(TabContext);
};

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState(0);
  const context = {
    tab,
    setTab,
  };

  return (
    <TabContext.Provider value={context}>
      {children}
    </TabContext.Provider>
  );
};
