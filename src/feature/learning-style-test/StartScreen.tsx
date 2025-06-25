import { useLearningStyleTestStore } from "../../store/learningStyleTestStore";

const StartScreen = () => {
  const { goNext } = useLearningStyleTestStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-[430px] h-screen bg-white flex flex-col items-center justify-center px-4 shadow-lg">
        {/* 이미지 영역 */}
        <div className="w-4/5 aspect-square bg-gray-300 flex items-center justify-center mb-8 rounded-lg max-w-xs sm:max-w-sm">
          <span className="text-gray-500 text-2xl sm:text-3xl md:text-4xl">이미지</span>
        </div>
        {/* 설명 텍스트 */}
        <p className="mb-10 text-center text-gray-700 text-base sm:text-lg md:text-xl px-2 sm:px-4 max-w-xs sm:max-w-sm">
          나만의 학습 패턴을 알아봐요 어쩌구
        </p>
        {/* 버튼 */}
        <button
          className="w-full max-w-xs py-3 rounded-3xl bg-gray-200 text-gray-700 text-base font-semibold hover:bg-gray-300 transition mt-4"
          onClick={goNext}
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
};

export default StartScreen;