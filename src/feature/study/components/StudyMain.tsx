import { useNavigate } from "react-router-dom";

// 스터디룸 카드에 표시될 데이터의 인터페이스 정의
interface StudyRoom {
  id: string;
  name: string;
  course: string;
  exist: boolean;
  currentMembers: number;
  maxMembers: number;
  todayStudyTime?: string; // 오늘 학습 시간 (선택 사항)
  participationRate?: string; // 참여도 (선택 사항)
  isRecommended?: boolean; // 추천 스터디룸 여부
}

const StudyMain = () => {
  const navigate = useNavigate();
  // 참여 중인 스터디룸 mock 데이터
  const participatingStudyRooms: StudyRoom[] = [
    {
      id: "room1",
      name: "톡스터디",
      course: "과학사",
      exist: true,
      currentMembers: 20,
      maxMembers: 50,
      todayStudyTime: "6시간",
      participationRate: "78%",
    },
    {
      id: "room2",
      name: "토론디",
      course: "문제해결을 위한 글쓰기와 발표",
      exist: false,
      currentMembers: 8,
      maxMembers: 50,
      todayStudyTime: "1시간",
      participationRate: "56%",
    },
  ];

  // 추천 스터디룸 mock 데이터
  const recommendedStudyRooms: StudyRoom[] = [
    {
      id: "room3",
      name: "컴네모여",
      course: "컴퓨터네트워크",
      exist: true,
      currentMembers: 40,
      maxMembers: 50,
      isRecommended: true,
    },
  ];

  return (
    // Layout의 main 태그 안에 들어가므로, flex-1과 overflow-y-auto는 Layout에서 처리됩니다.
    // 여기서는 콘텐츠의 내부 패딩과 정렬만 담당합니다.
    <div className="flex flex-col items-center p-4 bg-[#F1F5F4] min-h-full">
      {/* 참여 중인 스터디룸 섹션 */}
      <div className="w-[90%] max-w-md px-4 mt-[5%]">
        <p className="text-[15px] text-gray-600 font-semibold text-left mb-4">
          참여 중인 스터디룸
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {participatingStudyRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-start border-1 border-[#C7C7C7] mb-[10px]"
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
              <div className="flex justify-start w-full text-left mt-[5px]">
                <div className="flex flex-col items-start ml-[10px]">
                  <p className="text-[12px] text-gray-600">금일 학습 시간</p>
                  <p className="text-[16px] font-bold text-[#1E624D]">
                    {room.todayStudyTime}
                  </p>
                </div>
                <div className="flex flex-col items-center ml-[30%]">
                  <p className="text-[12px] text-gray-600">참여도</p>
                  <p className="text-[16px] font-bold text-[#1E624D]">
                    {room.participationRate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 스터디룸 추가 (+) 버튼 */}
        <div className="flex justify-center mb-8">
          <button className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl font-light">
            <img src="src/assets/plus-button.svg" alt="plus-button" />
          </button>
        </div>
      </div>

      {/* 추천 스터디룸 섹션 */}
      <div className="w-[90%] max-w-md px-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[15px] text-gray-600 font-semibold text-left mb-4">
            추천 스터디룸
          </p>
          <button
            className="text-[12px] font-light text-gray-500 hover:underline"
            onClick={() => navigate("/study-main/all-study-rooms")}
          >
            전체 보기
          </button>
        </div>
        <div className="flex flex-col">
          {recommendedStudyRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-start border-1 border-[#C7C7C7] mb-[10px]"
            >
              <h2 className="text-[20px] font-semibold text-black mx-[10px] mt-[10px]">
                {room.name}
              </h2>
              <p className="text-[12px] font-semibold text-gray-500 mx-[10px] mb-[10px]">
                {room.course} | {room.currentMembers}/{room.maxMembers}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMain;
