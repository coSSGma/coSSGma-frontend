import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudyMatching = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const navigate = useNavigate();

  // 임시 수업 목록 (최소 5개 이상이 보이도록 데이터 추가)
  const courses = [
    '과학사',
    '동서양의 윤리',
    '그림속 오페라',
    '우주자연인간',
    '과목별 가나다라 순으로',
    '미적분학',
    '일반물리학',
    '컴퓨터 개론',
    '선형대수학',
    '프로그래밍 기초',
    '고전 문학',
    '현대 사회와 윤리',
    '세계사 탐구',
    '심리학 개론',
    '경제학 원론',
    // 더 많은 수업을 추가할 수 있습니다.
  ];

  // 검색어에 따라 필터링된 수업 목록
  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // 전체 컨테이너: 이미지의 하얀색 카드 영역과 유사하게 만듭니다.
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800 p-4">
      {/* "스터디룸 매칭 하기" 제목 */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-45 mt-[20%] md:mt-16">
        스터디룸 매칭 하기
      </h1>

      {/* "공부하고 싶은 수업을 선택해 주세요" 안내문 */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 text-center">
        공부하고 싶은 수업을 선택해 주세요
      </p>

      {/* 검색 바 및 검색 결과 목록 컨테이너 */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden mt-[10%] mb-12">
        {/* 검색 바 */}
        <div className="flex items-center p-3 border-b border-gray-200 bg-gray-100 rounded-t-lg">
          <svg
            className="w-5 h-5 text-gray-500 mr-2"
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
          <input
            type="text"
            placeholder="검색"
            className="flex-grow p-2 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400 transition-colors duration-200"
            onClick={() => console.log('검색 버튼 클릭:', searchTerm)}
          >
            검색
          </button>
        </div>

        {/* 수업 목록 - max-h-60을 max-h-80으로 변경 (또는 필요한 만큼 더 늘리거나 제거) */}
        <div className="max-h-160 overflow-y-auto"> {/* 스크롤 가능한 영역 (더 많은 항목 표시) */}
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <button
                key={index}
                className={`w-full text-left py-3 px-4 border-b border-gray-200 last:border-b-0
                            ${selectedCourse === course ? 'bg-blue-100 text-blue-700 font-medium' : 'bg-white text-gray-700 hover:bg-gray-50'}
                            transition-colors duration-200`}
                onClick={() => setSelectedCourse(course)}
              >
                {course}
              </button>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">검색 결과가 없습니다.</p>
          )}
        </div>
      </div>

      {/* "다음" 버튼 */}
      <button
        className={`w-[80%] max-w-md py-8 rounded-3xl bg-gray-300 text-gray-700 text-lg font-semibold shadow-md mt-[10%]
                    hover:bg-gray-400 transition-all duration-200
                    ${!selectedCourse ? 'opacity-60 cursor-not-allowed' : ''}`}
        onClick={() => {
          if (selectedCourse) {
            console.log('선택된 수업:', selectedCourse);
            navigate("/matching-study-room");
            // 실제 앱에서는 다음 단계로 이동하는 로직을 여기에 추가
            // 예: navigate('/some-next-step');
          }
        }}
        disabled={!selectedCourse} // 수업이 선택되지 않으면 비활성화
      >
        다음
      </button>
    </div>
  );
};

export default StudyMatching;