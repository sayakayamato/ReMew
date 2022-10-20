import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./css/App.css";
import "./css/Home.css";
import { RouterConfig } from "./RouterConfig";
// For test
// import { auth } from "./lib/firebase";
import { AuthProvider } from "./contexts/AuthContext";
import { TabProvider } from "./contexts/TabContext";
import { FriendsListProvider } from "./contexts/FriendsListContext";
import { FriendsIdProvider } from "./contexts/FriendsIdContext";
// import { TestFirebase } from "./test/TestFirebase";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <div className="phone_size">
          <FriendsListProvider>
            <FriendsIdProvider>
              <TabProvider>
                <BrowserRouter>
                  <RouterConfig />
                </BrowserRouter>
              </TabProvider>
            </FriendsIdProvider>
          </FriendsListProvider>
        </div>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
