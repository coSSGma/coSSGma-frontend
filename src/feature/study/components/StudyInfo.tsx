import { useNavigate } from "react-router-dom";
import tableIcon from "../../../assets/study_table.svg";
import playIcon from "../../../assets/play.svg";
import memberIcon from "../../../assets/member.svg";
import backIcon from "../../../assets/prev.svg";
import nextIcon from "../../../assets/next.svg";
import bromem from "../../../assets/bromem.svg";
import { useState } from "react";
import { useAuthStore } from "../../../store/useAuthStore";
import { memberList } from "../../../mocks/const/members";

const StudyInfo = () => {
  const navigate = useNavigate();
  const [members] = useState(memberList);
  const [cur, setCur] = useState(1);
  const loginName = useAuthStore((state) => state.name);

  const handleMenu = (menu: string) => {
    navigate(`${menu}`);
  };

  const slicedMembers = members.slice((cur - 1) * 10, cur * 10);

  const handleSilde = (move: string) => {
    if (move === "prev" && cur !== 1) {
      setCur(cur - 1);
    } else if (move === "next" && cur !== Math.ceil(members.length / 10)) {
      setCur(cur + 1);
    }
  };

  return (
    <div className="h-full bg-[#F1F5F4] pt-15">
      <div className="h-[8%] flex justify-between mx-15 mb-20 rounded-2xl shadow bg-white">
        <div className="h-full w-[50%] flex flex-col justify-center items-start p-20">
          <p className="text-[10px]">다음 스터디 일정</p>
          <p className="text-[16px] font-semibold">25년 6월 27일</p>
        </div>
        <div className="h-full w-[50%] flex flex-col justify-center items-start p-20">
          <p className="text-[10px]">그룹 달성률</p>
          <p className="text-[16px] font-semibold">89%</p>
        </div>
      </div>
      <div className="h-fit flex flex-col items-center p-10 mx-15 rounded-2xl shadow bg-white">
        <p className="h-[20%] mb-20">스터디원 {members.length}/50</p>
        <div className="flex gap-21">
          {slicedMembers.slice(0, 5).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              {member.name === loginName ? (
                <img
                  src={bromem}
                  alt={`멤버${member.id}`}
                  width="29px"
                  height="33px"
                />
              ) : (
                <img
                  src={memberIcon}
                  alt={`멤버${member.id}`}
                  width="29px"
                  height="33px"
                />
              )}
              <p className="text-10">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="h-[80%] flex justify-center my-5 gap-5">
          <img
            src={backIcon}
            alt="이전"
            width="11"
            height="16"
            onClick={() => handleSilde("prev")}
          />
          <img src={tableIcon} alt="테이블이미지" width="302" height="54" />
          <img
            src={nextIcon}
            alt="다음"
            width="11"
            height="16"
            onClick={() => handleSilde("next")}
          />
        </div>
        <div className="flex gap-21">
          {slicedMembers.slice(5, 10).map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={memberIcon}
                alt={`멤버${member.id}`}
                width="29px"
                height="33px"
              />
              <p className="text-10">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[55%] mx-15 my-10 flex flex-col gap-[15px]">
        <div
          className="w-full h-[62px] rounded-[40px] bg-[#1E624D] flex items-center p-[20px] justify-center mt-20 mb-20"
          onClick={() => handleMenu("learning")}
        >
          <img src={playIcon} alt="시작하기" width="25" height="25" />
          <h2 className="text-right text-[20px] ml-10 text-white font-bold">
            학습 시작하기
          </h2>
        </div>
        <div
          className="w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between"
          onClick={() => handleMenu("ranking")}
        >
          <div className="w-27 h-27 rounded-full bg-[#BCBCBC]"></div>
          <h2 className="text-right text-[20px] text-[#006244] font-bold">
            그룹 랭킹
          </h2>
        </div>
        <div
          className="w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between"
          onClick={() => handleMenu("participate")}
        >
          <div className="w-27 h-27 rounded-full bg-[#BCBCBC]"></div>
          <h2 className="text-right text-[20px] text-[#006244] font-extrabold">
            그룹 퀴즈 참가하기
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StudyInfo;
