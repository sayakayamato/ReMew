import { Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import WordCloud from "./DD8A5B32-A8C6-4471-A3BE-3E12280C5053.jpeg"

export function ObjectiveContents() {
  return (
    <>
      <Input placeholder="Basic usage" />
      <Box bg="white" w="100%" h="100%" p={4} color="tomato">
        <img src={WordCloud} alt="" />
      </Box>
    </>
  );
}
