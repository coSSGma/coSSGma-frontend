import { useEffect, useState } from "react";


const StudyStart = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handlePause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
    // 공부 종료 api 요청
  };


  return (
    <div className='h-full flex flex-col gap-30 items-center justify-center bg-[#2E443E]'>
      <p className="text-[28px] text-white">학습 시간</p>
      <div className="flex flex-col items-center">
        <h1 className="text-[65px] font-bold text-[#2AFFBE]">{formatTime(seconds)}</h1>
        <div className="flex gap-10">
          <button
            onClick={handleStop}
            className="w-[154px] h-[53px] px-4 py-2 bg-[#C4EFE2] rounded-3xl font-extrabold"
          >
            그만하기
          </button>
          <button
            onClick={handlePause}
            className="w-[154px] h-[53px] px-4 py-2 bg-[#2AFFBE] rounded-3xl font-extrabold"
          >
            {isRunning ? "일시정지" : "시작"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyStart;