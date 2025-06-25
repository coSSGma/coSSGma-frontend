import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import water from "../../../assets/water.svg";

interface SubmissionProp {
  answer: string;
  question: string;
  selected: string;
}

const QuizResult = () => {
  const { state } = useLocation();
  const submissions: SubmissionProp[] = state?.submissions || [];
  const [view, setView] = useState(false);
  const [result, setResult] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  const correctCount = useMemo(() =>
    submissions.filter((sub) => sub.answer === sub.selected).length
  , [submissions]);

  useEffect(() => {
    if (view && result) {
      setTimeout(() => setFadeIn(true), 10);
    } else {
      setFadeIn(false);
    }
  }, [view, result]);

  const handleNext = () => {
    if(!view) {
      setView(true);
    } else if(!result) {
      setResult(true);
    } else {
      navigate('/study/info');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {!view && (
        <div className="w-[350px] bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
        <p className="text-[20px] font-bold text-[#1E624D] mb-2">과학사 퀴즈 결과</p>
        <div className="text-center text-[14px] text-[#1E624D] mb-4">
          <p>사용자: 홍길동</p>
          <p>일시: 2025.06.25</p>
          <p>정답 수: <span className="font-bold">{correctCount}/{submissions.length}</span></p>
        </div>
        <div className="w-full bg-[#F8FAF9] rounded-xl border border-[#E2E8F0] p-4">
          <div className="flex items-center mb-2">
            <span className="w-[40px] text-[15px] font-bold text-[#1E624D]">오답</span>
            <span className="flex-1 text-[15px] font-bold text-[#1E624D] text-center"> </span>
          </div>
          {submissions.map((sub, index) => (
            <div key={index} className="flex items-center py-1 border-b last:border-b-0 border-[#E2E8F0]">
              <span className="w-[30px] text-[15px] text-[#1E624D] font-bold">{String(index + 1).padStart(2, '0')}</span>
              <span className="flex-1 text-[15px] text-[#1E624D] text-center">{sub.answer}</span>
              {sub.answer === sub.selected ? (
                <span className="w-[18px] h-[18px] rounded-full bg-green-400 inline-block ml-2"></span>
              ) : (
                <span className="w-[18px] h-[18px] rounded-full bg-red-400 inline-block ml-2"></span>
              )}
            </div>
          ))}
        </div>
      </div>
      )}
      {view && !result && (
        <div className="w-[340px] bg-white rounded-2xl shadow-md p-6 border border-[#E2E8F0] flex flex-col gap-5 mt-10">
          <div>
            <p className="text-[17px] font-bold text-[#1E624D] mb-2">현재 성향 분석</p>
            <p className="text-[14px] text-[#222] leading-relaxed whitespace-pre-line">
              고대~중세 과학사에는 익숙하고 배경지식이 있음\n근대~현대 과학사의 과학자 업적/과학 혁명의 흐름에는 약함\n사건의 맥락보다는 인물과 업적을 구분하는 데에 어려움이 있음
            </p>
          </div>
          <div>
            <p className="text-[17px] font-bold text-[#1E624D] mb-2">추천 학습 방식</p>
            <ul className="text-[14px] text-[#222] leading-relaxed list-disc list-inside space-y-1">
              <li>"타임라인 중심 학습" – 과학사의 흐름을 시각적으로 정리하기</li>
              <li>스토리 기반 영상 시청 – 인물 중심 다큐/영상으로 접근하기</li>
              <li>"인물 카드 만들기" – 과학자별 한 장 요약 카드</li>
            </ul>
          </div>
        </div>
      )}
      {view && result && (
        <div
          className={`flex flex-col items-center justify-center min-h-[60vh] w-full transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-[22px] font-bold text-[#39695C] mb-10 text-center leading-snug">
            퀴즈 풀기 성공!<br />물 1개를 획득했어요
          </p>
          <img src={water} alt="water" className="w-[80px] h-[100px] mt-10 mb-20" />
          <p className="text-18">획득한 물은 <span className="font-extrabold text-20 text-[#39695C]">브루디</span>를 키우는 데 사용돼요!</p>
        </div>
      )}
      <button 
        onClick={handleNext}
        className="absolute bottom-[40px] w-[309px] h-62 rounded-3xl bg-[#1E624D] text-white font-extrabold"
      >
        다음
      </button>
    </div>
  );
};

export default QuizResult;