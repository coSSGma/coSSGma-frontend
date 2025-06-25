import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router 사용

// Mock Data (백엔드 응답을 모방)
const mockResult = {
  // 이미지에 맞춰 학습 성향을 '계획형 마스터'로 변경합니다.
  learningStyle: '계획형 마스터',
  // 이미지에 맞춰 추천 매칭 문구를 변경합니다.
  matchingPartner: '함께 계획 세우고 꾸준히 실천하는 파트너',
  // 이미지에 맞춰 성향 특징 문구를 변경합니다.
  features: [
    '정해진 루틴과 목표 달성을 중시하는 성실형',
  ],
};

const TestResult = () => {
  // 상태 초기값을 mock data로 설정
  const [learningStyle, setLearningStyle] = useState<string>(mockResult.learningStyle);
  const [matchingPartner, setMatchingPartner] = useState<string>(mockResult.matchingPartner);
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
  const styleImage = 'https://via.placeholder.com/200x200/cccccc/000000?text=X'; // 회색 배경에 X 표시

  return (
    // 전체 배경색과 패딩, flexbox 설정을 조정하여 이미지와 유사하게 만듭니다.
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800 py-8 px-4 relative">      
      {/* 상단바 높이만큼 여백 */}
      <div className="mt-[20%]"></div> 

      {/* "홍길동님의 학습 성향은" 제목 */}
      <p className="text-lg text-gray-600 mb-2">홍길동님의 학습 성향은</p>

      {/* 학습 성향 (가장 큰 텍스트) */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-8 mb-8 text-center leading-tight">
        {learningStyle}
      </h1>

      {/* 학습 성향에 따른 이미지 (이미지 크기 및 배경색 조정) */}
      <div className="w-52 h-52 sm:w-64 sm:h-64 mt-[5%] mb-[5%] flex items-center justify-center bg-gray-200 rounded-md overflow-hidden">
        <img src={styleImage} alt="학습 성향 이미지" className="w-[70%] h-[70%] object-cover" />
      </div>

      {/* 성향 특징 */}
      <div className="mb-[5%] text-center max-w-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-[3%]">성향 특징</h2>
        {/* 이미지에 <li> 대신 <p> 태그 사용 및 폰트 크기 조정 */}
        {features.map((feature, index) => (
          <p key={index} className="text-base text-gray-600 leading-relaxed">
            {feature}
          </p>
        ))}
      </div>

      {/* 함께 스터디하면 좋을 파트너의 학습 매칭 성향 */}
      <div className="mb-[5%] text-center max-w-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">추천 매칭</h2>
        <p className="text-base text-gray-600 leading-relaxed">{matchingPartner}</p>
      </div>

      {/* "그룹방 매칭하러 가기" 버튼 */}
      {/* 이미지의 버튼처럼 넓이, 패딩, 둥근 모서리, 배경색, 그림자 등을 조정합니다. */}
      <button
        className="w-[80%] max-w-md py-15 rounded-3xl bg-blue-500 text-white mt-[40%] hover:bg-blue-600 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={() => navigate("/study-matching")} // 이 부분이 이미 /study-matching 경로로 이동시킵니다.
      >
        그룹방 매칭하러 가기
      </button>
    </div>
  );
};

export default TestResult;
