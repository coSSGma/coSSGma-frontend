import { useNavigate } from 'react-router-dom';
import tableIcon from '../../../assets/study_table.svg';

const StudyMain = () => { 
  const navigate = useNavigate();

  const handleMenu = (menu: string) => {
    navigate(`${menu}`);
  }

  return (
    <div className='h-full'>
      <div className='h-[35%] border flex justify-center'>
        <img src={tableIcon} alt="테이블이미지" width="322" height="53" />
      </div>
      <div className='h-[10%] flex flex-col justify-center items-center'>
        <p className='text-[12px]'>다음 대면 스터디 일정</p>
        <p className='text-[20px] font-bold'>25년 6월 27일</p>
      </div>
      <div className='h-[55%] px-[30px] py-10 flex flex-col gap-[15px]'>
        <div
          className='w-full h-[84px] rounded-xl bg-[#D9D9D9] flex items-center p-[20px] justify-between mb-30'
          onClick={() => handleMenu('learning')}
        >
          <div>이미지</div>
          <div className='flex flex-col'>
            <p className='text-[12px] text-right'>12명 학습중</p>
            <h2 className='text-right text-[20px] font-bold'>학습 시작하기</h2>
          </div>
        </div>
        <div 
          className='w-full h-[66px] rounded-xl bg-[#D9D9D9] flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('learning')}
        >
          <div>이미지</div>
          <h2 className='text-right text-[20px] font-bold'>그룹 게시판</h2>
        </div>
        <div 
          className='w-full h-[66px] rounded-xl bg-[#D9D9D9] flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('ranking')}
        >
          <div>이미지</div>
          <h2 className='text-right text-[20px] font-bold'>랭킹 보러가기</h2>
        </div>
        <div
          className='w-full h-[66px] rounded-xl bg-[#D9D9D9] flex items-center py-[10px] px-[20px] justify-between'
          onClick={() => handleMenu('Participate')}
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