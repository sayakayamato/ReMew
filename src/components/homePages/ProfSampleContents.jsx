import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export function ProfSampleContents({ question, profId, categoryId }) {
  const navigate = useNavigate();

  const WhatProf = (e) => {
    const profText = e.target.innerText; //記入した質問本文を定数に入れる
    navigate("/profs/" + profId, {
      state: { profText: profText, profId: profId, categoryId: categoryId },
    }); //ページ遷移と共に値を持っていく
  };

  return (
    <>
      <button className="whatQuestion" onClick={WhatProf}>
        {question}
      </button>
    </>
  );
}
