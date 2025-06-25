import { useEffect, useState } from "react";
import { useLearningStyleTestStore } from "../../store/learningStyleTestStore";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  title: string;
  question: string;
  options: string[];
}

interface QuestionScreenProps {
  questionProp: string;
}

const QuestionScreen = ({ questionProp }: QuestionScreenProps) => {
  const navigate = useNavigate();
  const { step, goNext, selectAnswer, answers } = useLearningStyleTestStore();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `/api/${questionProp}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        로딩 중...
      </div>
    );
  }

  const validStep = Math.min(step, questions.length);
  const question =
    validStep > 0 ? (questions[validStep - 1] as unknown as Question) : null;

  if (!question) {
    return (
      <div>질문 데이터가 없습니다. step 또는 questions 배열을 확인하세요.</div>
    );
  }

  const selected = answers.find(
    (a: { questionId: number; answer: string }) => a.questionId === question.id
  )?.answer;

  return (
    // 전체 높이를 차지하고 상대적 위치를 가집니다.
    <div className="h-full">
      {/* 질문 내용 및 진행률 바 섹션 */}
      <div className="absolute top-100 w-full px-30 text-center">
        {/* 진행률 바 */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-[15%]">
          <div
            className="bg-[#1E624D] h-2.5 rounded-full transition-all duration-300" // 색상 변경
            style={{ width: `${(validStep / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-[16px] text-gray-600 text-center mb-[10%]">
          Step {validStep} / {questions.length}
        </p>

        {/* 질문 내용 */}
        <p className="text-[16px] text-[#455153] mb-[10%] text-center leading-normal">
          {question.question}
        </p>

        {/* 답변 옵션 버튼 그룹 */}
        <div className="flex flex-col gap-10 w-full">
          {question.options.map((opt) => (
            <button
              key={opt}
              className={`w-full py-[10px] px-[] rounded-3xl text-center text-[15px] transition-all duration-200
                ${
                  selected === opt
                    ? "bg-[#4AAB8D] text-white" // 선택 시 색상 변경
                    : "bg-[#C4EFE2] text-black border border-gray-300 hover:bg-gray-50" // 기본 및 호버 색상
                }`}
              onClick={() => selectAnswer(question.id, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* "다음" 또는 "테스트 종료하기" 버튼 섹션 */}
      <div className="absolute bottom-80 w-full px-30">
        <button
          className="w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold
            disabled:bg-[#A8A8A8] transition-all duration-200" // 비활성화 시 색상 변경
          onClick={() => {
            if (validStep === questions.length && selected) {
              if (questionProp === "style") {
                navigate("/result");
              } else if (questionProp === "quiz") {
                navigate("/quiz/result");
              }
            } else {
              goNext();
            }
          }}
          disabled={!selected}
        >
          {validStep === questions.length ? "테스트 종료하기" : "다음"}
        </button>
      </div>
    </div>
  );
};

export default QuestionScreen;
