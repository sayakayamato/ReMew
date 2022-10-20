import { useLocation } from "react-router-dom";
import { Textarea, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDataCreate } from "../../hooks/useDataCreate";
import { Text } from "@chakra-ui/react";

// import { useNavigate } from "react-router-dom"

import { TwitterIcon, TwitterShareButton } from "react-share";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/AuthContext";

export function CollectFeedback() {
  //useLocationを使ってQuestionDetailContnetsからのstateを受け取る
  const state = useLocation().state;
  let [value, setValue] = useState("");

  useEffect(() => {
    if (state) setValue(state);
  }, []);

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const { user } = useAuthContext();
  const logedInUserId = user.uid;
  const logedInUsername = user.displayName;

  const dataCreate = useDataCreate;

  const registerNewQuestion = () => {
    const tableName = "questions";
    const struct = {
      userId: logedInUserId,
      username: logedInUsername,
      content: value,
      createdAt: new Date().toISOString(),
    };

    dataCreate(tableName, struct)
      .then((value) => {
        setFeedUrl("https://knowme.vercel.app/chats/" + String(value));
      })
      .then(() => {
        onOpen();
      });
  };

  const [feedUrl, setFeedUrl] = useState();

  //ボタンを押したら送信モーダル
  const { isOpen, onOpen, onClose } = useDisclosure();

  //モーダル閉じたらフィードに移動
  // const navigate = useNavigate()
  // const ModalClose = () => {
  //       navigate("/FeedContents")
  // }

  return (
    <>
      <div className="collect_feedback_top">
        
          <Text fontSize="xl" className="collect_feedback_title">
            質問を投稿する
          </Text>
        
      </div>
      <div className="collect_feedback_textarea">
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="例):私の長所を教えてください！"
          width={"80vw"}
          height={"20vh"}
        />
      </div>
      <div className="collect_feedback_button_div">
        <button
          className="collect_feedback_button"
          onClick={registerNewQuestion}
        >
          送信
        </button>
      </div>

      {/* 送信ボタンを押したら共有モーダル表示 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>フィードバック募集を共有</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TwitterShareButton
              url={feedUrl}
              title={value}
              // via="Kill_In_Sun"
              // related={["Kill_In_Sun", "GatsbyJS"]}
              // hashtags={post.frontmatter.tags}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
