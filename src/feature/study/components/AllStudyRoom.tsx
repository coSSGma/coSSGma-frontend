import { useState } from "react";

// 스터디룸 카드에 표시될 데이터의 인터페이스 정의 (StudyMain과 동일)
interface StudyRoom {
  id: string;
  name: string;
  course: string;
  exist: boolean;
  currentMembers: number;
  maxMembers: number;
}

const AllStudyRoom = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 추천 스터디룸 mock 데이터 (이미지에 맞춰 데이터 추가)
  const recommendedStudyRooms: StudyRoom[] = [
    {
      id: "room3",
      name: "컴네모여",
      course: "컴퓨터네트워크",
      exist: true,
      currentMembers: 40,
      maxMembers: 50,
    },
  ];

  // 인기 스터디룸 mock 데이터 (이미지에 맞춰 데이터 추가)
  const popularStudyRooms: StudyRoom[] = [
    {
      id: "room4",
      name: "운영체제에이블",
      course: "운영체제",
      exist: true,
      currentMembers: 50,
      maxMembers: 50,
    },
    {
      id: "room5",
      name: "문글토론룸",
      course: "문제해결을 위한 글쓰기와 발표",
      exist: true,
      currentMembers: 50,
      maxMembers: 50,
    },
    {
      id: "room6",
      name: "우자인인공",
      course: "우주자연인간",
      exist: true,
      currentMembers: 50,
      maxMembers: 50,
    },
  ];

  // 검색어에 따라 필터링된 스터디룸 목록 (추천+인기 합쳐서 필터링)
  const filteredRecommendedRooms = recommendedStudyRooms.filter(
    (room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPopularRooms = popularStudyRooms.filter(
    (room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // StudyMain과 동일하게 전체 높이를 차지하고 패딩을 적용합니다.
    <div className="flex flex-col items-center p-4 bg-[#F1F5F4] min-h-full">
      {/* 스터디룸 이름 조회 검색 바 */}
      {/* StudyMatching 컴포넌트의 검색 바와 유사하게 구성 */}
      <div className="flex items-center px-4 py-6 bg-white rounded-3xl border border-gray-200 shadow-sm mx-auto mb-8 w-[90%] max-w-md mt-[5%]">
        <input
          type="text"
          placeholder="스터디룸 이름 조회"
          className="flex-grow text-[12px] font-medium text-black placeholder-[#C7C7C7] bg-transparent focus:outline-none ml-[10px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* 검색 아이콘 */}
        <svg
          className="w-5 h-5 text-[#1E624D]"
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

      {/* 추천 스터디룸 섹션 */}
      <div className="w-[90%] max-w-md px-4 mb-8 mt-[5%]">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[16px] text-gray-600 font-bold text-left">
            추천 스터디룸
          </p>
          <button className="text-[12px] font-light text-gray-500 hover:underline">
            전체 보기
          </button>{" "}
          {/* 이 버튼은 기능 없음 (현재 전체 목록이므로) */}
        </div>
        <div className="flex flex-col gap-4">
          {filteredRecommendedRooms.length > 0 ? (
            filteredRecommendedRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-sm p-12 flex flex-col items-start border-1 border-[#C7C7C7] mb-[10px]"
              >
                <div className="flex justify-between items-center w-full mb-2 mx-[10px]">
                  <h2 className="text-[20px] font-semibold text-black">
                    {room.name}
                  </h2>
                  <span
                    className={`w-15 h-15 rounded-full mr-[20px] ${
                      room.exist ? "bg-[#00CE8E]" : "bg-[#B3B3B3]"
                    }`}
                  ></span>
                </div>
                <p className="text-[12px] font-normal text-gray-500 mb-4 mx-[10px]">
                  {room.course} | {room.currentMembers}/{room.maxMembers}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
      </div>

      {/* 인기 스터디룸 섹션 */}
      <div className="w-[90%] max-w-md px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[16px] text-gray-600 font-bold text-left">
            인기 스터디룸
          </p>
          <button className="text-[12px] font-light text-gray-500 hover:underline">
            전체 보기
          </button>{" "}
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {filteredPopularRooms.length > 0 ? (
            filteredPopularRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-xl shadow-sm p-12 flex flex-col items-start border-1 border-[#C7C7C7] mb-[10px]"
              >
                <div className="flex justify-between items-center w-full mb-2 mx-[10px]">
                  <h2 className="text-[20px] font-semibold text-black">
                    {room.name}
                  </h2>
                  <span
                    className={`w-15 h-15 rounded-full mr-[20px] ${
                      room.exist ? "bg-[#00CE8E]" : "bg-[#B3B3B3]"
                    }`}
                  ></span>
                </div>
                <p className="text-[12px] font-normal text-gray-500 mb-4 mx-[10px]">
                  {room.course} | {room.currentMembers}/{room.maxMembers}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              검색 결과가 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllStudyRoom;
