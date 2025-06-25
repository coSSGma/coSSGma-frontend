import { useNavigate } from "react-router-dom"; // React Router 사용

// 스터디룸 정보의 타입을 정의합니다.
interface StudyRoomInfo {
  roomName: string;
  currentMembers: number;
  maxMembers: number;
  learningStyle: string;
  studyTime: string;
}

const MatchedStudyRoom = () => {
  const navigate = useNavigate();

  // 매칭된 스터디룸 정보 (Mock Data)
  // 실제 앱에서는 백엔드 API로부터 이 데이터를 받아올 것입니다.
  const studyRoom: StudyRoomInfo = {
    roomName: "톡스터디",
    currentMembers: 12,
    maxMembers: 50,
    learningStyle: "계획형 마스터", // 와이어프레임과 동일하게
    studyTime: "20:00~01:00",
  };

  const handleEnterRoom = () => {
    // '입장하기' 버튼 클릭 시 동작할 로직
    navigate("/Home");
    // 예: navigate('/study-room-detail/${studyRoom.roomName}');
    // alert('스터디룸에 입장합니다!');
  };

  const handleRematch = () => {
    // '다시 매칭하기' 버튼 클릭 시 동작할 로직
    navigate(-1);
    // 예: navigate('/study-matching'); 또는 매칭 로딩 페이지로 이동
    // alert('다시 매칭을 시작합니다!');
  };

  return (
    // StudyMatching 컴포넌트와 동일하게 전체 높이를 차지하고 상대적 위치를 가집니다.
    <div className="h-full">
      {/* StudyMatching의 주요 콘텐츠 섹션과 유사한 구조 */}
      <div className="absolute top-175 w-full px-30 text-center">
        {/* "Ai가 추천하는 _님의 스터디룸이에요!" 텍스트 */}
        {/* StudyMatching의 H1 태그와 유사하게 스타일링합니다. */}
        <p className="text-[22px] font-semibold text-black mb-[8px] text-center leading-tight">
          학습 성향을 정밀 분석해 추천한
        </p>
        <p className="text-[22px] font-semibold text-black mb-[10%] text-center leading-tight">
          최적의 스터디룸이에요!
        </p>

        {/* 스터디룸 정보 카드 */}
        <div className="w-[90%] max-w-md mx-auto bg-[#C4EFE2] rounded-3xl shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-[25px] font-bold text-[#1E624D] mt-[5%] mb-[5%]">
            {studyRoom.roomName}
          </h2>
          <div className="text-[16px] text-[#455153] space-y-10 mb-[10%]">
            <p className="text-[12px]">
              인원수
              <br />
              <span className="text-[16px] font-semibold">
                {studyRoom.currentMembers}/{studyRoom.maxMembers}
              </span>
            </p>
            <p className="text-[12px]">
              학습 성향
              <br />
              <span className="text-[16px] font-semibold">
                {studyRoom.learningStyle}
              </span>
            </p>
            <p className="text-[12px]">
              학습 시간대
              <br />
              <span className="text-[16px] font-semibold">
                {studyRoom.studyTime}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* "입장하기" 버튼 (StudyMatching과 동일한 위치에 두 개의 버튼 배치) */}
      <div className="absolute bottom-80 w-full px-30 flex flex-col gap-4">
        {" "}
        {/* flex-col과 gap-4를 추가하여 버튼 간 간격 조절 */}
        <button
          className="w-full h-[62px] px-8 py-4 text-[20px] text-white bg-[#1E624D] rounded-full font-semibold
            disabled:bg-[#A8A8A8] transition-all duration-200"
          onClick={handleEnterRoom}
        >
          스터디룸 가입하기
        </button>
        {/* "다시 매칭하기" 버튼 */}
        <button
          className="w-full h-[62px] px-8 py-4 text-[20px] text-[#124B3A]] bg-[#C4EFE2] rounded-full font-semibold
            disabled:bg-gray-200 disabled:text-gray-400 transition-all duration-200"
          onClick={handleRematch}
        >
          다시 매칭하기
        </button>
      </div>
    </div>
  );
};

export default MatchedStudyRoom;
