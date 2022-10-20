import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
// import { FeedContents } from "../feedPages/FeedContents";

import { FriendsContents } from "../friendPages/FriendsContents";
import { HomeContents } from "../homePages/HomeContents";
import { NewFriendModal } from "../friendPages/NewFriendModal";
import { Flex, Spacer } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { useAuthContext } from "../../contexts/AuthContext";
import { CollectFeedback } from "../homePages/CollectFeedback";
import { MyProfilePage } from "../myPages/MyprofilePage";
import { useTabContext } from "../../contexts/TabContext";

export function UnderTabBar() {
  const { user } = useAuthContext();
  const { tab, setTab } = useTabContext();
  // const [tabIndex, setTabIndex] = useState(0);
  // TODO: タブの状態管理（別routeから戻ったときに反映されるようにuseContextを使用する）

  if (!user) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <div className="top_bar">
          <Flex>
            <Link to="/">
              <img
                src="ReMew_logo.jpg"
                alt=""
                width={"90px"}
                className="service_name"
              />
            </Link>
            <Spacer />
            {/* TODO: リリース時はadminの制限が必要 */}
            {process.env.REACT_APP_ADMIN_MODE &&
              process.env.REACT_APP_ADMIN_MODE === "ON" && (
                <>
                  <Link to="/admin">
                    <p style={{ margin: "auto", padding: "auto" }}>アドミン</p>
                  </Link>
                  <Spacer />
                </>
              )}

            <Link to="/settings">
              <Wrap className="top_profile_icon">
                <WrapItem>
                  <Avatar name={user.displayName} src={user.photoURL} />
                </WrapItem>
              </Wrap>
            </Link>
          </Flex>
        </div>
        <Tabs
          variant="soft-rounded"
          colorScheme="gray"
          isFitted="true"
          className="under_tab_bar"
          // defaultIndex={0}
          onChange={(index) => setTab(index)}
          defaultIndex={tab}
        >
          <TabPanels>
            <TabPanel>
              <HomeContents />
            </TabPanel>
            <TabPanel>
              <CollectFeedback />
            </TabPanel>
            <TabPanel>
              <MyProfilePage />
            </TabPanel>
            <TabPanel>
              <p className="friend">Friend</p>
              <FriendsContents />
              <NewFriendModal />
            </TabPanel>
          </TabPanels>
          <TabList className="under_nav_bar">
            <Tab color={"#704116"}>
              <MdHome />
              Home
            </Tab>
            <Tab color={"#704116"}>
              <MdOutlineArticle />
              投稿
            </Tab>
            <Tab color={"#704116"}>Myプロフ</Tab>
            <Tab color={"#704116"}>
              <MdGroup />
              Friend
            </Tab>
          </TabList>
        </Tabs>
      </>
    );
  }
}
