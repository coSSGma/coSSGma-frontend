import { useEffect, useState } from 'react';
import { useLearningStyleTestStore } from '../../store/learningStyleTestStore';
import { useNavigate } from 'react-router-dom'; // React Router 사용

// Question 인터페이스: 질문의 구조를 정의, id를 number로 수정
interface Question {
  id: number;          // 질문의 고유 식별자 (number로 가정)
  title: string;       // 질문 제목
  question: string;    // 질문 내용
  options: string[];   // 답변 옵션 배열 (A, B, C, D 등)
}

interface QuestionScreenProps {
  questionProp: string;
}

const QuestionScreen = ({ questionProp }: QuestionScreenProps) => {
  const navigate = useNavigate(); // 경로 이동을 위한 navigate 훅
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
    return <div className="h-screen flex justify-center items-center text-xl">로딩 중...</div>;
  }

  const validStep = Math.min(step, questions.length);
  const question = validStep > 0 ? (questions[validStep - 1] as unknown as Question) : null;
console.log(question);
  if (!question) {
    return <div>질문 데이터가 없습니다. step 또는 questions 배열을 확인하세요.</div>;
  }

  const selected = answers.find((a: { questionId: number; answer: string }) => a.questionId === question.id)?.answer;

  // 이 sendToBackend 함수는 이제 호출되지 않으므로 제거하거나 주석 처리할 수 있습니다.
  // const answerMap: { [key: string]: string | null } = questions.reduce((acc, q, index) => {
  //   const answer = answers.find((a: { questionId: number; answer: string }) => a.questionId === q.id)?.answer;
  //   acc[`Q${index + 1}`] = answer ? answer.charAt(0) : null;
  //   return acc;
  // }, {} as { [key: string]: string | null });

  // // 백엔드에 데이터를 POST로 보내는 함수 (이제 사용되지 않음)
  // const sendToBackend = async () => {
  //   const requestData = { answers: answerMap };
  //   try {
  //     const response = await fetch('https://your-backend-api-endpoint', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(requestData),
  //     });
  //     if (response.ok) {
  //       console.log('데이터 전송 성공');
  //       // POST 성공 시 TestResult로 이동
  //       navigate('/result');
  //     } else {
  //       console.log('데이터 전송 실패');
  //     }
  //   } catch (error) {
  //     console.error('데이터 전송 중 오류:', error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(validStep / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">
          {validStep} / {questions.length} 완료
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center max-w-md">
        {question.title}
      </h2>

      <p className="text-base md:text-lg text-gray-700 mb-8 text-center max-w-md">
        {question.question}
      </p>

      <div className="flex flex-col gap-4 w-[80%] max-w-md mb-6">
        {question.options.map((opt) => (
          <button
            key={opt}
            className={`py-8 px-15 rounded-3xl text-left ${
              selected === opt
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
            } transition-all duration-200`}
            onClick={() => selectAnswer(question.id, opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        className="w-[80%] max-w-md py-15 rounded-3xl bg-blue-500 text-white mt-[40%] hover:bg-blue-600 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={() => {
          if (validStep === questions.length && selected) {
            // 백엔드 호출 대신 바로 /result 경로로 이동
            if(questionProp === "style") {
              navigate('/result');
            } else if(questionProp === "quiz") {
              navigate('/quiz/result');
            }
          } else {
            goNext();
          }
        }}
        disabled={!selected}
      >
        {validStep === questions.length ? '테스트 종료하기' : '다음'}
      </button>
    </div>
  );
};

export default QuestionScreen;