import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-[#D9D9D9] h-[116px] flex justify-center items-center">
        <p className="text-[18px] font-extrabold">얼레벌레열심히</p>
      </header>
      <main className="relative flex-1 min-h-0 overflow-y-auto">
        <Outlet />
      </main>
      <footer className="bg-[#D9D9D9] py-20 h-[92px] flex justify-evenly">
        <button
          className="w-[52px] h-[52px] rounded-full bg-white text-[15px] font-bold"
        >
          홈
        </button>
        <button
          className="w-[52px] h-[52px] rounded-full bg-white text-[15px] font-bold"
        >
          스터디
        </button>
        <button
          className="w-[52px] h-[52px] rounded-full bg-white text-[15px] font-bold"
        >
          랭킹
        </button>
        <button
          className="w-[52px] h-[52px] rounded-full bg-white text-[15px] font-bold"
        >
          마이<br />페이지
        </button>
      </footer>
    </div>
  );
}