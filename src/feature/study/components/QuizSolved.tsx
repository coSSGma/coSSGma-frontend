import { useNavigate } from "react-router-dom";

const QuizSolved = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-4 mt-[40px]">
      {/* 상단 여백 (사진과 유사하게 위치 조절) */}
      <div className="mt-20 md:mt-32"></div>

      {/* "님에게 알맞는 스터디룸 매칭 중이에요" 텍스트 */}
      <p className="text-[22px] font-bold md:text-3xl text-[#1E624D] text-center leading-relaxed mt-[10%] mb-[10%]">
        퀴즈 풀기 성공!
        <br />물 1개를 획득했어요
      </p>

      {/* 로딩 이미지 영역 */}
      <div className="w-full max-w-[200px] h-full mx-auto mb-[20%] flex items-center justify-center rounded-md overflow-hidden">
        <img
          src="src/assets/water.svg"
          alt="로딩 이미지"
          className="w-[50%] h-[50%] object-cover"
        />
      </div>

      {/* 하단 여백 (필요에 따라 조절) */}
      <div className="mb-20 md:mb-32"></div>
      <div className="absolute bottom-80 w-full px-30">
        <button
          className="w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold
            disabled:bg-[#A8A8A8] transition-all duration-200"
          onClick={() => {
            navigate("/matching-study-room");
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default QuizSolved;
