import { useEffect } from "react"; // useEffect를 import 합니다.
import { useNavigate } from "react-router-dom"; // useNavigate를 import 합니다.

const MatchingLoading = () => {
  // 경로 이동을 위한 navigate 훅을 초기화합니다.
  const navigate = useNavigate();

  // 임시 사용자 이름 (실제 앱에서는 props 또는 전역 상태에서 가져올 수 있습니다)
  const userName: string = "홍길동"; // 예시 사용자 이름

  // 컴포넌트가 마운트될 때 2초 타이머를 설정합니다.
  useEffect(() => {
    // 2초(2000ms) 후에 /matched-study-room 경로로 이동합니다.
    const timer = setTimeout(() => {
      navigate("/matched-study-room");
    }, 2000); // 2000 밀리초 = 2초

    // 컴포넌트가 언마운트될 때 타이머를 정리하여 메모리 누수를 방지합니다.
    return () => clearTimeout(timer);
  }, [navigate]); // navigate 함수가 변경될 때만 이펙트를 다시 실행합니다.

  return (
    // 전체 컨테이너: 배경색, 중앙 정렬, 최소 화면 높이 설정
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      {/* 상단 여백 (사진과 유사하게 위치 조절) */}
      <div className="mt-20 md:mt-32"></div>

      {/* "님에게 알맞는 스터디룸 매칭 중이에요" 텍스트 */}
      <p className="text-[22px] font-bold md:text-3xl text-gray-700 text-center leading-relaxed mb-[20%]">
        AI가 {userName}님과 가장 잘 맞는
        <br />
        스터디룸을 찾고 있어요!
      </p>

      {/* 로딩 이미지 영역 */}
      <div className="w-full max-w-[200px] h-full mx-auto mb-[20%] flex items-center justify-center rounded-md overflow-hidden">
        <img
          src="src/assets/matching-brudy.svg"
          alt="로딩 이미지"
          className="w-full h-full object-cover"
        />
        {/* 실제 로딩 애니메이션을 여기에 추가할 수 있습니다.
                    예: <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
                */}
      </div>

      {/* 하단 여백 (필요에 따라 조절) */}
      <div className="mb-20 md:mb-32"></div>
    </div>
  );
};

export default MatchingLoading;
