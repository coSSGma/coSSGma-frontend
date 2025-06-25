import { useNavigate } from 'react-router-dom';
import tableIcon from '../../../assets/study_table.svg';
import playIcon from '../../../assets/play.svg';

const StudyMain = () => { 
  const navigate = useNavigate();

  const handleMenu = (menu: string) => {
    navigate(`${menu}`);
  }

  return (
    <div className='h-full bg-[#F1F5F4] pt-15'>
      <div className='h-[8%] flex justify-between mx-15 mb-10 rounded-2xl shadow bg-white'>
        <div className='h-full w-[50%] flex flex-col justify-center items-start p-20'>
          <p className='text-[10px]'>다음 스터디 일정</p>
          <p className='text-[16px] font-semibold'>25년 6월 27일</p>
        </div>
        <div className='h-full w-[50%] flex flex-col justify-center items-start p-20'>
          <p className='text-[10px]'>그룹 달성률</p>
          <p className='text-[16px] font-semibold'>89%</p>
        </div>
      </div>
      <div className='h-[30%] flex flex-col items-center mx-15 rounded-2xl shadow bg-white'>
        <p className='h-[20%]'>스터디원 20/50</p>
        <div className='h-[80%] flex justify-center'><img src={tableIcon} alt="테이블이미지" width="302" height="54" /></div>
      </div>
      <div className='h-[55%] mx-15 my-10 flex flex-col gap-[15px]'>
        <div
          className='w-full h-[62px] rounded-[40px] bg-[#1E624D] flex items-center p-[20px] justify-center mt-20 mb-20'
          onClick={() => handleMenu('learning')}
        >
          <img src={playIcon} alt="시작하기" width="25" height="25" />
          <h2 className='text-right text-[20px] ml-10 text-white font-bold'>학습 시작하기</h2>
        </div>
        <div 
          className='w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('groupboard')}
        >
          <div className='w-27 h-27 rounded-full bg-[#BCBCBC]'></div>
          <h2 className='text-right text-[20px] text-[#006244] font-bold'>그룹 게시판</h2>
        </div>
        <div 
          className='w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('ranking')}
        >
          <div className='w-27 h-27 rounded-full bg-[#BCBCBC]'></div>
          <h2 className='text-right text-[20px] text-[#006244] font-bold'>그룹 랭킹</h2>
        </div>
        <div
          className='w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('participate')}
        >
          <div className='w-27 h-27 rounded-full bg-[#BCBCBC]'></div>
          <h2 className='text-right text-[20px] text-[#006244] font-extrabold'>그룹 퀴즈 참가하기</h2>
        </div>
      </div>
    </div>
  );
};

export default StudyMain;