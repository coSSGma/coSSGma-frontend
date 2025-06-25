import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가

const QuizAnalysis = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    <div className="h-full flex flex-col items-center bg-[#F1F5F4] pt-8 pb-20 font-inter">
      {/* 퀴즈 결과 타이틀 */}
      <h1 className="text-[22px] font-bold text-[#1E624D] my-[5%]">
        과학사 퀴즈 결과
      </h1>

      {/* 현재 성향 분석 섹션 */}
      <div className="bg-gray-200 rounded-2xl shadow-md p-6 w-[85%] max-w-lg mb-6 flex flex-col">
        <div className="m-[5%]">
          <h2 className="text-[18px] font-bold text-[#1E624D] mb-4">
            현재 성향 분석
          </h2>
          <p className="text-[12px] text-[#29394C] mb-2 leading-relaxed">
            고대~중세 과학사에는 익숙하고 배경지식이 있음
          </p>
          <p className="text-[12px] text-[#29394C] mb-2 leading-relaxed">
            근대~현대 과학사의 과학자 업적/과학 혁명의 흐름에는 약함
          </p>
          <p className="text-[12px] text-[#29394C] leading-relaxed">
            사건의 맥락보다는 인물과 업적을 구분하는 데에 어려움이 있음
          </p>
          <br />
          <h2 className="text-[18px] font-bold text-[#1E624D] mb-4">
            추천 학습 방식
          </h2>
          <p className="text-[12px] text-[#29394C] mb-2 leading-relaxed">
            <span className="font-semibold">"타임라인 중심 학습"</span> –
            과학사의 흐름을 시각적으로 정리하기
          </p>
          <p className="text-[12px] text-[#29394C] mb-2 leading-relaxed">
            스토리 기반 영상 시청 – 인물 중심 다큐/영상으로 접근하기
          </p>
          <p className="text-[12px] text-[#29394C] leading-relaxed">
            <span className="font-semibold">"인물 카드 만들기"</span> – 과학자별
            한 장 요약 카드
          </p>
        </div>
      </div>

      {/* 나의 실력 향상도 점검 섹션 (그래프는 플레이스홀더로 표현) */}
      <div className="bg-gray-200 rounded-2xl shadow-md p-6 w-[85%] max-w-lg my-[5%] flex flex-col items-center">
        <h2 className="text-[18px] font-bold text-[#1E624D] my-[5%] ml-[5%] self-start">
          나의 실력 향상도 점검
        </h2>
        <img
          src="src/assets/advanced.svg"
          alt="그래프"
          className="w-70% h-70%"
        />
        <p className="text-[10px] text-center text-black font-semibold my-[5%]">
          저번 퀴즈 대비 총 15점 성장했습니다!
        </p>
      </div>

      {/* "다음" 버튼 */}
      <div className="w-[85%] max-w-md mt-6">
        {" "}
        {/* 고정 위치를 위해 fixed 사용 */}
        <button
          className="w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold
            disabled:bg-[#A8A8A8] transition-all duration-200"
          onClick={() => navigate("/")} // 예시로 홈으로 이동하도록 설정
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default QuizAnalysis;
