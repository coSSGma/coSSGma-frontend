import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router 사용

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

  // 임시 사용자 이름 (실제 앱에서는 props 또는 전역 상태에서 가져올 수 있습니다)
  const userName: string = "홍길동"; // 예시 사용자 이름

  // 매칭된 스터디룸 정보 (Mock Data)
  // 실제 앱에서는 백엔드 API로부터 이 데이터를 받아올 것입니다.
  const studyRoom: StudyRoomInfo = {
    roomName: "얼레벌레열심히",
    currentMembers: 12,
    maxMembers: 50,
    learningStyle: "계획형 어쩌구", // 와이어프레임과 동일하게
    studyTime: "20:00~01:00",
  };

  const handleEnterRoom = () => {
    // '입장하기' 버튼 클릭 시 동작할 로직
    navigate("/")
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
    // 전체 컨테이너: 배경색, 중앙 정렬, 최소 화면 높이 설정
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800 p-4">
      {/* 상단 여백 (사진과 유사하게 위치 조절) */}
      <div className="mt-[25%] md:mt-32"></div>

      {/* "Ai가 추천하는 _님의 스터디룸이에요!" 텍스트 */}
      <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed">
        Ai가 추천하는 <span className="font-semibold">{userName}</span>님의
        <br />
        스터디룸이에요!
      </p>

      {/* 스터디룸 정보 카드 */}
      <div className="w-[80%] max-w-sm bg-gray-200 rounded-3xl shadow-md p-6 mt-20 mb-20 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-gray-800 mt-[5%] mb-[15%]">
          {studyRoom.roomName}
        </h2>
        <div className="text-base text-gray-700 space-y-2 mb-[10%]">
          <p>인원수<br /> {studyRoom.currentMembers}/{studyRoom.maxMembers}</p>
          <p>학습 성향<br /> {studyRoom.learningStyle}</p>
          <p>학습 시간대<br /> {studyRoom.studyTime}</p>
        </div>
      </div>

      {/* "입장하기" 버튼 */}
      <button
        className="w-[80%] max-w-md py-8 rounded-3xl bg-gray-300 text-gray-700 text-lg font-semibold shadow-md mt-[20%] mb-4
                   hover:bg-gray-400 transition-colors duration-200"
        onClick={handleEnterRoom}
      >
        입장하기
      </button>

      {/* "다시 매칭하기" 버튼 */}
      <button
        className="w-[80%] max-w-md py-8 rounded-3xl bg-gray-300 text-gray-700 text-lg font-semibold shadow-md
                   hover:bg-gray-400 transition-colors duration-200"
        onClick={handleRematch}
      >
        다시 매칭하기
      </button>
    </div>
  );
}

export default MatchedStudyRoom;
