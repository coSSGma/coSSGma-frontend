import { Outlet, useNavigate, useLocation } from "react-router-dom";
import backIcon from "../assets/backIcon.svg";
import settingIcon from "../assets/Setting.svg";
import homeGray from "../assets/homeGray.svg";
import studyGray from "../assets/studyGray.svg";
import rankingGray from "../assets/rankingGray.svg";
import mypageGray from "../assets/mypageGray.svg";
import homeGreen from "../assets/homeGreen.svg";
import studyGreen from "../assets/studyGreen.svg";
import rankingGreen from "../assets/rankingGreen.svg";
import mypageGreen from "../assets/mypageGreen.svg";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigate = () => {
    navigate(-1);
  }

  const bgColor = location.pathname === "/learning" ? "bg-[#2E443E]" : "bg-[#F1F5F4]";
  const textColor = location.pathname === "/learning" ? "text-white" : "text-black";
  const title = location.pathname === "/" ? "브루디" : "톡스터디";

  return (
    <div className={`h-screen flex flex-col`}>
      {location.pathname === "/" ? (
        <header className={`${bgColor} h-[129px] flex items-end border-[#D9E3E0]`}>
          <p className="text-[25px] font-extrabold px-20 py-10 text-[#1E624D]">브루디</p>
        </header>
      ) : (
        <header className={`${bgColor} h-[129px] flex justify-center items-end border-b-[3.5px] border-[#D9E3E0]`}>
        <div className="w-full h-50 flex justify-between">
          <span className="ml-30 mt-5" onClick={handleNavigate}><img src={backIcon} alt="뒤로가기" width="11" height="25" /></span>
          <p className={`text-[18px] font-extrabold ${textColor}`}>톡스터디</p>
          <span className="mr-[15px] mt-5"><img src={settingIcon} alt="설정" width="26" height="26" /></span>
        </div>
      </header>
      )
      }
      
      <main className="relative flex-1 min-h-0 overflow-y-auto">
        <Outlet />
      </main>
      <footer className="bg-white h-[105px] flex justify-evenly">
        {location.pathname === "/" ? (<img src={homeGreen} alt="홈" width='21px' height='53px' className="" />) 
        : (<img src={homeGray} alt="홈" width='21px' height='53px' onClick={() => navigate('/')} />)}
        {location.pathname === "/study" ? (<img src={studyGreen} alt="스터디" width='36px' height='56px' />) 
        : (<img src={studyGray} alt="스터디" width='36px' height='56px' onClick={() => navigate('/study')} />)}
        {location.pathname === "/ranking" ? (<img src={rankingGreen} alt="랭킹" width='28px' height='56px' />) 
        : (<img src={rankingGray} alt="랭킹" width='28px' height='56px' onClick={() => navigate('/ranking')} />)}
        {location.pathname === "/mypage" ? (<img src={mypageGreen} alt="마이페이지" width='59px' height='56px' />) 
        : (<img src={mypageGray} alt="마이페이지" width='59px' height='56px' onClick={() => navigate('/mypage')} />)}
      </footer>
    </div>
  );
}