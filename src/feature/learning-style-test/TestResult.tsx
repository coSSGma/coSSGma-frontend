import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router 사용

// Mock Data (백엔드 응답을 모방)
const mockResult = {
  name: "홍길동",
  learningStyle: "공감형 커뮤니케이터",
  matchingPartner: "함께 계획 세우고 꾸준히 실천하는 파트너",
  features: ["정해진 루틴과 목표 달성을 중시하는 성실형"],
};

const TestResult = () => {
  // 상태 초기값을 mock data로 설정
  const [name] = useState<string>(mockResult.name);
  const [learningStyle, setLearningStyle] = useState<string>(
    mockResult.learningStyle
  );
  const [matchingPartner, setMatchingPartner] = useState<string>(
    mockResult.matchingPartner
  );
  const [features, setFeatures] = useState<string[]>(mockResult.features);
  const navigate = useNavigate(); // 경로 이동을 위한 navigate 훅

  // useEffect를 사용하여 백엔드 호출 대신 mock data 사용 (테스트용)
  useEffect(() => {
    // 실제 백엔드 호출 대신 mock data로 즉시 설정
    setLearningStyle(mockResult.learningStyle);
    setMatchingPartner(mockResult.matchingPartner);
    setFeatures(mockResult.features);
  }, []); // 빈 의존성 배열로 한 번만 실행

  // 임시 이미지 URL (실제 이미지로 교체 가능)
  // 이미지와 동일한 크기와 X 표시가 있는 플레이스홀더를 사용합니다.
  const styleImage = "https://via.placeholder.com/200x200/cccccc/000000?text=X"; // 회색 배경에 X 표시

  return (
    // QuestionScreen과 동일하게 전체 높이를 차지하고 상대적 위치를 가집니다.
    <div className="h-full">
      {/* QuestionScreen의 질문 내용 및 진행률 바 섹션과 유사한 구조 */}
      <div className="absolute top-100 w-full px-30 text-center">
        {/* "{username}님의 학습 성향은" 제목 */}
        <p className="text-[16px] text-black mb-[5%]">{name}님의 학습 성향은</p>

        {/* 학습 성향 (가장 큰 텍스트) */}
        {/* QuestionScreen의 질문 제목과 유사한 폰트 스타일 유지 */}
        <h1 className="text-[35px] font-extrabold text-[#1E624D] mb-[10%] text-center leading-tight">
          {learningStyle}
        </h1>

        {/* 학습 성향에 따른 이미지 */}
        <div className="w-[80%] max-w-[200px] h-[200px] mx-auto mb-[10%] flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
          <img
            src={styleImage}
            alt="학습 성향 이미지"
            className="w-[70%] h-[70%] object-cover"
          />
        </div>

        {/* 성향 특징 */}
        <div className="mb-[10%] text-center w-full">
          <h2 className="text-[17px] font-extrabold text-black mb-[5px]">
            성향 특징
          </h2>
          {features.map((feature, index) => (
            <p key={index} className="text-[15px] text-black leading-relaxed">
              {feature}
            </p>
          ))}
        </div>

        {/* 함께 스터디하면 좋을 파트너의 학습 매칭 성향 */}
        <div className="mb-[10%] text-center w-full">
          <h2 className="text-[17px] font-extrabold text-black mb-[5px]">
            추천 매칭
          </h2>
          <p className="text-[15px] text-black leading-relaxed">
            {matchingPartner}
          </p>
        </div>
      </div>

      {/* "그룹방 매칭하러 가기" 버튼 (QuestionScreen과 동일한 위치) */}
      <div className="absolute bottom-80 w-full px-30">
        <button
          className="w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold
            disabled:bg-[#A8A8A8] transition-all duration-200"
          onClick={() => navigate("/study-matching")}
        >
          그룹방 매칭하러 가기
        </button>
      </div>
    </div>
  );
};

export default TestResult;
