import { useState } from "react";
import QuestionScreen from "../../learning-style-test/QuestionScreen";


const StudyGame = () => {
  const [gameStart, setGameStart] = useState(false);
  const [quiz, setQuiz] = useState([]);

  const handleStart = () => {
    setGameStart(true);
  }

  return (
    <div className="h-full">
      {!gameStart && (
        <div className="h-full flex flex-col justify-center items-center">
          <p className="text-[35px] font-extrabold">AI 퀴즈쇼</p>
          <p className="text-[18px]">학습 시간</p>
          <p className="text-[41px] font-extrabold">15:00</p>
          <p className="text-[18px]">퀴즈 범위</p>
          <p className="text-[41px] font-extrabold">1~6주차</p>
          <button
            onClick={handleStart}
            className="w-[154px] h-[53px] px-4 py-2 bg-[#D9D9D9] rounded-3xl font-extrabold"
          >
            시작하기
          </button>
        </div>
      )}
      {gameStart && (
        <QuestionScreen questionProp="quiz" />
      )}
    </div>
  );
};

export default StudyGame;