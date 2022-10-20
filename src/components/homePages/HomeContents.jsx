import "../../css/Home.css";
import "../../css/App.css";
import "swiper/css/navigation";
import { QuestionSlider } from "./QuestionSlider";
// import { CollectMyAnswer } from "./CollectMyAnswer";
import { FeedContents } from "../feedPages/FeedContents";
import { ProfSlider } from "./ProfSlider";

export function HomeContents() {
  return (
    <>
      <div className="collect_feedback_category">
        <div className="collect_feedback_category_p">
          <p>フィードバックを集める</p>
        </div>
        <QuestionSlider />
      </div>
      <div className="collect_my_answer">
        <div className="collect_my_answer_p">
          <p>質問に答える</p>
        </div>
        <ProfSlider />
      </div>

      <div className="feed_contents">
        <FeedContents />
      </div>
    </>
  );
}
