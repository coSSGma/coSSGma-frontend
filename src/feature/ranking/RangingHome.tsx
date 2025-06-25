const RankingHome = () => {
  // Mock data for ranking
  const rankings = [
    { rank: "1위", name: "김일등", waterCount: "200개" },
    { rank: "2위", name: "김일등", waterCount: "198개" },
    { rank: "3위", name: "김일등", waterCount: "195개" },
    { rank: "4위", name: "김일등", waterCount: "190개" },
    { rank: "5위", name: "김일등", waterCount: "189개" },
    { rank: "6위", name: "김일등", waterCount: "189개" },
    { rank: "7위", name: "김일등", waterCount: "187개" },
  ];

  return (
    <div className="flex flex-col items-center p-4 bg-[#F1F5F4] min-h-screen font-inter">
      <div className="bg-gradient-to-r from-[#D4ECFF] to-[#C4EFE2] rounded-2xl shadow-md p-6 w-[85%] max-w-sm mt-[10%] flex flex-col items-center justify-center text-center">
        <img
          src="src/assets/water.svg"
          className="w-50 h-50 my-10"
          alt="Water drop"
        />
        <p className="text-[16px] font-semibold text-[#29394C] mb-2">
          물을 모아 순위를 높여보세요!
        </p>
        <p className="text-[8px] font-normal text-[#29394C] my-4">
          학습 진도율에 따라 물을 획득할 수 있어요. <br />
          물을 모아 브루디를 성장 시키고 상위권에 도달해보세요
        </p>
      </div>

      {/* Ranking period */}
      <p className="text-[9px] text-gray-500 mt-20 mb-5">
        2025.03.02 ~ 2025.06.21
      </p>

      {/* User's current ranking */}
      <div className="bg-[#1E624D] rounded-2xl shadow-md p-12 w-[85%] max-w-sm flex flex-col text-white mb-6">
        {" "}
        {/* Changed from p-24 to p-6 and flex-col */}
        <p className="text-[12px] font-normal mb-2 ml-10">홍길동님</p>{" "}
        {/* Aligned to start, added margin-bottom */}
        <div className="flex items-center justify-between w-full px-4">
          <p className="text-[22px] mr-10">394위</p>
          <span className="text-xl">· · · · · · · · · · · · · ·</span>
          <img
            src="src/assets/water.svg"
            className="w-25 h-25"
            alt="Water icon"
          />
          <p className="text-[16px] mr-10">12개</p>
        </div>
      </div>

      {/* Ranking list */}
      <div className="bg-white rounded-2xl shadow-md p-6 w-[85%] max-w-sm mt-20">
        {rankings.map((entry, index) => (
          <div
            key={index}
            className="flex justify-between items-center pr-10 py-2 border-b border-gray-200 last:border-b-0"
          >
            <p className="font-bold text-gray-700 w-1/4 ml-20">{entry.rank}</p>
            <p className="text-gray-600 w-50">{entry.name}</p>
            <span className="text-lg"> · · · · · · · · · ·</span>
            <p className="text-gray-800 font-bold w-50 text-right">
              {entry.waterCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingHome;
