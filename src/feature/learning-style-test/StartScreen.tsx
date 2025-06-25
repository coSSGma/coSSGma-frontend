import { useLearningStyleTestStore } from "../../store/learningStyleTestStore";

const StartScreen = () => {
  const { goNext } = useLearningStyleTestStore();

  return (
    <>
      <div className="h-full">
        <div className="absolute p-30 top-100 w-full text-center">
          <div className="text-[#455153] text-[18px] font-bold mb-[20%]">
            브루디와 함께 <br />
            개별 맞춤 학습 성향을 테스트 해봐요!
          </div>
          {/* 이미지 영역 */}
          <div className="w-full h-[250px] flex items-center justify-center rounded-lg mb-8 max-w-[calc(100%-60px)] mx-auto">
            <img
              src="src/assets/start-screen-brudy.svg"
              alt="브루디 이미지"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[16px] text-[#455153] mt-[5%]">
            브루디는 6가지 학습 성향 중 하나를 분석해,
            <br />
            당신에게 가장 잘 맞는 스터디 그룹을 추천해줘요
          </p>
        </div>
        {/* 버튼 위치를 Login.tsx와 동일하게 맞춤 */}
        <div className="absolute bottom-80 w-full px-30">
          <button
            onClick={goNext}
            className=" w-full h-[62px] px-4 py-2 text-[20px] text-white bg-[#1E624D] rounded-3xl font-bold"
          >
            테스트 시작하기
          </button>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
