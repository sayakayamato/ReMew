import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import { ProfileCardContents } from "./ProfileCardContents";
import { useFirebase } from "../../hooks/useFirebase";

export function ProfileTabHome() {
  const tableName = "profCategory";

  const { data } = useFirebase(tableName);
  const categoryList = data
    ? Object.entries(data).map(([key, item]) => {
        return {
          categoryId: key,
          content: item.content,
        };
      })
    : [];
  return (
    <>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align="stretch"
        className="card_button_wrap"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            {categoryList &&
              categoryList.map((category) => {
                return <Tab key={category.categoryId}>{category.content}</Tab>;
              })}
            {/* <Tab>Like</Tab>
            <Tab>Values</Tab>
            <Tab>Activity</Tab> */}
          </TabList>
          <TabPanels>
            {categoryList &&
              categoryList.map((category) => {
                return (
                  <TabPanel key={category.categoryId}>
                    <ProfileCardContents
                      profTitle={category.content}
                      categoryId={category.categoryId}
                    />
                  </TabPanel>
                );
              })}
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
