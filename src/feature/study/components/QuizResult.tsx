import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface Submission {
  question: string;
  selected: string | null;
  answer: string;
}

interface Result {
  question: string;
  feedback: string;
  correct: boolean;
}

interface ApiResponse {
  results: Result[];
  analysis: string;
  methods: string[];
  scoreSummary: string;
  progressFeedback: string;
}

const QuizResult = () => {
  const { state } = useLocation();
  const submissions = state?.submissions || [];
  const [resultData, setResultData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch("http://localhost:8080/quiz/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            submissions,
          }),
        });
        if (!response.ok) {
          throw new Error("결과를 불러오지 못했습니다.");
        }
        const data: ApiResponse = await response.json();
        setResultData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류 발생");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [submissions]);

  if (loading) {
    return <div>결과를 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!resultData) {
    return <div>결과 데이터가 없습니다.</div>;
  }

console.log(resultData);

  return (
    <div>퀴즈 결과 임시 창</div>
  );
};

export default QuizResult;