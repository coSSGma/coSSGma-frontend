import { useNavigate } from 'react-router-dom';
import tableIcon from '../../../assets/study_table.svg';
import playIcon from '../../../assets/play.svg';

const StudyMain = () => { 
  const navigate = useNavigate();

  const handleMenu = (menu: string) => {
    navigate(`${menu}`);
  }

  return (
    <div className='h-full bg-[#F1F5F4]'>
      <div className='h-[8%] flex justify-between mx-15 my-5 rounded-2xl shadow bg-white'>
        <div className='h-full w-[50%] flex flex-col justify-center items-start p-20'>
          <p className='text-[10px]'>다음 스터디 일정</p>
          <p className='text-[16px] font-semibold'>25년 6월 27일</p>
        </div>
        <div className='h-full w-[50%] flex flex-col justify-center items-start p-20'>
          <p className='text-[10px]'>그룹 달성률</p>
          <p className='text-[16px] font-semibold'>89%</p>
        </div>
      </div>
      <div className='h-[30%] flex justify-center mx-15 rounded-2xl shadow bg-white'>
        <img src={tableIcon} alt="테이블이미지" width="302" height="54" />
      </div>
      <div className='h-[55%] mx-15 my-10 flex flex-col gap-[15px]'>
        <div
          className='w-full h-[62px] rounded-[40px] bg-[#1E624D] flex items-center p-[20px] justify-center mt-20 mb-20'
          onClick={() => handleMenu('learning')}
        >
          <img src={playIcon} alt="시작하기" width="25" height="25" />
          <h2 className='text-right text-[20px] ml-10 text-white font-bold'> 학습 시작하기</h2>
        </div>
        <div 
          className='w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('groupboard')}
        >
          <div>이미지</div>
          <h2 className='text-right text-[20px] font-bold'>그룹 게시판</h2>
        </div>
        <div 
          className='w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('ranking')}
        >
          <div>이미지</div>
          <h2 className='text-right text-[20px] font-bold'>랭킹 보러가기</h2>
        </div>
        <div
          className='w-full h-[66px] rounded-xl bg-white flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('participate')}
        >
          <div>이미지</div>
          <div className='flex flex-col'>
            <p className='text-[12px] text-right'>3명 참가중</p>
            <h2 className='text-right text-[20px] font-bold'>게임 참가하기</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMain;