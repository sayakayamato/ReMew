import { Link } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { SignOutButton } from "../SignOutButton";
import {
  EditDisplayName,
  EditProfileImage,
  EditBackgroundImage,
} from "./editProfies";

export function SettingPage() {
  return (
    <>
      <Flex>
        <Box p="4" bg="" className="return_button">
          <Link to="/">キャンセル</Link>
        </Box>
        <Spacer />
        <Box p="4" bg="" className="profile_setting">
          <SignOutButton />
        </Box>
      </Flex>
      <p>プロフィール設定</p>
      <p>表示名の変更</p>
      <EditDisplayName />
      <p>表示画像の変更</p>
      <EditProfileImage />
      <p>背景画像の変更</p>
      <EditBackgroundImage />
    </>
  );
}
