import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudyMatching = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  // 임시 수업 목록 (최소 5개 이상이 보이도록 데이터 추가)
  const courses = [
    "과학사",
    "동서양의 윤리",
    "그림속 오페라",
    "우주자연인간",
    "과목별 가나다라 순으로",
    "미적분학",
    "일반물리학",
    "컴퓨터 개론",
    "선형대수학",
    "프로그래밍 기초",
    "고전 문학",
    "현대 사회와 윤리",
    "세계사 탐구",
    "심리학 개론",
    "경제학 원론",
    // 더 많은 수업을 추가할 수 있습니다.
  ];

  // 검색어에 따라 필터링된 수업 목록
  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // TestResult 컴포넌트와 동일하게 전체 높이를 차지하고 상대적 위치를 가집니다.
    <div className="h-full">
      {/* TestResult의 주요 콘텐츠 섹션과 유사한 구조 */}
      <div className="absolute top-200 w-full px-30 text-center">
        {/* "브루디와 공부하고 싶은 강의를 선택해 주세요!" 제목 */}
        <h1 className="text-[22px] font-bold text-[#1E624D] mb-[10%] text-center leading-tight">
          브루디와 공부하고 싶은 <br /> 강의를 선택해 주세요!
        </h1>

        {/* 검색 바 컨테이너 (이미지처럼 둥근 형태의 입력 필드) */}
        <div className="flex items-center px-4 py-5 bg-[#C4EFE2] rounded-3xl border border-gray-200 shadow-sm mx-auto mb-4 w-[90%] max-w-md">
          {" "}
          {/* max-w-md 추가 */}
          <input
            type="text"
            placeholder="과목명" // Placeholder 텍스트 변경
            className="flex-grow pl-5 text-[12px] text-[#1E624D] placeholder-[#1E624D] bg-transparent focus:outline-none" // 폰트 크기 변경
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* 검색 아이콘 */}
          <svg
            className="w-15 h-15 text-[#1E624D]" // 아이콘 색상 변경 및 크기 유지
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        {/* 수업 목록 컨테이너 (이미지처럼 각 항목이 둥근 모서리를 가지도록 조정) */}
        <div className="max-h-140 overflow-y-auto rounded-lg mx-auto w-[90%] max-w-md bg-[#D0D0D0] shadow-sm">
          {/* max-w-md, bg-white, shadow-sm 추가 */}
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <button
                key={index}
                className={`w-full text-left text-[12px] py-3 px-4 border-b border-gray-200 last:border-b-0
                              ${
                                selectedCourse === course
                                  ? "bg-[#C4EFE2] text-[#1E624D] font-bold"
                                  : "bg-[#EEEEEE] text-gray-700 hover:bg-gray-50"
                              }
                              transition-colors duration-200`}
                onClick={() => setSelectedCourse(course)}
              >
                {course}
              </button>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
      </div>

      {/* "다음" 버튼 (TestResult 및 QuestionScreen과 동일한 위치) */}
      <div className="absolute bottom-80 w-full px-30">
        <button
          className="w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold
            disabled:bg-[#A8A8A8] transition-all duration-200"
          onClick={() => {
            if (selectedCourse) {
              console.log("선택된 수업:", selectedCourse);
              navigate("/matching-study-room");
            }
          }}
          disabled={!selectedCourse} // 수업이 선택되지 않으면 비활성화
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default StudyMatching;
