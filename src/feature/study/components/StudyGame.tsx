import { useState } from "react";
import Quiz from "./Quiz";

const StudyGame = () => {
  const [gameStart, setGameStart] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleStart = () => {
    setGameStart(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="h-full">
      {!gameStart && (
        <div className="h-full flex flex-col justify-center items-center">
          <p className="text-[32px] text-[#1E624D] font-bold mb-20">AI 퀴즈쇼</p>
          <div className="w-[294px] h-[295px] bg-[#C4EFE2] rounded-3xl flex justify-center items-center">
            <div className="text-center">
              <p className="text-22 text-[#1E624D] font-bold mb-20">과학사</p>
              <p className="text-[11px] text-[#1E624D]">학습 시간</p>
              <p className="text-[26px] text-[#1E624D] font-extrabold mb-20">15:00</p>
              {uploadedFileName ? (
                <>
                <p className="text-[11px] text-[#1E624D]">퀴즈 범위</p>
                <p className="text-[26px] text-[#1E624D] font-extrabold">1~6주차</p>
                </>
              ) : (
                <label className="flex flex-col items-center cursor-pointer">
                  <span className="text-[18px] text-gray-500 mb-2">문서 업로드</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-[154px] h-[53px] flex items-center justify-center bg-[#F0F0F0] rounded-3xl border border-dashed border-gray-400">
                    <span className="text-gray-400">파일 선택</span>
                  </div>
                </label>
              )}
            </div>
          </div>
          <button
            onClick={handleStart}
            className={`absolute bottom-[40px] w-[309px] h-62 rounded-3xl text-white
              ${uploadedFileName ? "bg-[#1E624D]" : "bg-[#D9D9D9]"}
            `}
            disabled={!uploadedFileName}
          >
            시작하기
          </button>
        </div>
      )}
      {gameStart && (
        <Quiz />
      )}
    </div>
  );
};

export default StudyGame;