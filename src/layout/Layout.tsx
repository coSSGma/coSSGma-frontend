import { Outlet, useNavigate } from "react-router-dom";
import backIcon from "../assets/backIcon.svg";

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-[#F1F5F4] h-[129px] flex justify-center items-end border-b-[3.5px] border-[#D9E3E0]">
        <div className="w-full h-50 flex justify-between">
          <span className="ml-30 mt-5" onClick={handleNavigate}><img src={backIcon} alt="뒤로가기" width="11" height="25" /></span>
          <p className="text-[18px] font-extrabold">톡스터디</p>
          <span className="w-[41px]"></span>
        </div>
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