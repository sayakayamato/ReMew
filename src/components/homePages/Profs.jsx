import { Link, useParams } from "react-router-dom";
import { ProfContents } from "./ProfContents";
import { useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
// import { useParams } from "react-router-dom";

import "../../css/Chats.css";
import { useDataRead } from "../../hooks/useDataRead";
import { useEffect, useState } from "react";

export function Profs() {
  //useLocationを使ってFeedContentsから値を受け取る
  const location = useLocation();
  const dataRead = useDataRead;
  const params = useParams();

  const [profText, setProfText] = useState("Loading...");
  const [profCategory, setProfCategory] = useState("Loading...");
  const profId = params.profId;

  useEffect(() => {
    if (!location.state) {
      dataRead("profSamples", profId).then((res) => {
        setProfText(res.content);
        setProfCategory(res.categoryId);
      });
    } else {
      setProfText(location.state.profText);
      setProfCategory(location.state.categoryId);
    }
  }, []);

  return (
    <>
      <div className="chats_header">
        <div>
          <Link to="/">
            <ChevronLeftIcon boxSize={6} className="return_button" />
          </Link>
        </div>
        <div className="chats_title">
          <p className="chat_title_text">プロフに回答する</p>
        </div>
      </div>

      <div className="chats_question">{profText}</div>
      <ProfContents
        profId={profId}
        profText={profText}
        categoryId={profCategory}
      />
    </>
  );
}
