import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface QuizProp {
  question: string;
  options: string[];
  answer: string;
}

interface Submission {
  question: string;
  selected: string | null;
  answer: string;
}

const Quiz = () => {
  const [quizData, setQuizData] = useState<QuizProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cur, setCur] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submits, setSubmits] = useState<Submission[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch('http://localhost:8080/quiz/start');
        if (!response.ok) {
          throw new Error('퀴즈 데이터를 불러오지 못했습니다.');
        }
        const data = await response.json();
        setQuizData(data.data);
        setSubmits(data.data.map((q: QuizProp) => ({
          question: q.question,
          selected: null,
          answer: q.answer,
        })));
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류 발생');
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (quizData.length === 0) {
    return <div>퀴즈 데이터가 없습니다.</div>;
  }

  const currentQuiz = quizData[cur];

  const handleNext = () => {
    if (selectedOption === null) {
      alert("정답을 선택해주세요!");
      return;
    }
    
    const newSubmits = [...submits];
    newSubmits[cur] = {
      question: currentQuiz.question,
      selected: selectedOption,
      answer: currentQuiz.answer,
    };
    setSubmits(newSubmits);
    if (cur < quizData.length - 1) {
      setCur(cur + 1);
      setSelectedOption(null);
    } else {
      navigate("/quiz/result", { state: { submissions: newSubmits } });
    }
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="box-border h-full w-full p-[40px]">
      <div>
        <p className="text-center text-20 font-bold mb-10">{cur + 1}번</p>
        <p className="text-15 mb-20 text-center">{currentQuiz.question}</p>
        <div className="flex flex-col gap-15">
          {currentQuiz.options.map((op, index) => (
            <div 
              key={index} 
              className={
                `text-15 text-center px-20 py-10 font-bold w-full rounded-3xl h-fit transition-colors
                ${selectedOption === op
                  ? "bg-[#4AAB8D] text-white"
                  : "bg-[#C4EFE2] text-black"
                }`
              }
              onClick={() => handleSelect(op)}
            >
              {index + 1}. {op}
            </div>
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="absolute bottom-[40px] w-[309px] h-62 rounded-3xl bg-[#1E624D] text-white"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Quiz;