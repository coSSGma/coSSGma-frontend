import brudySeed from '../../assets/brudySeed.svg';
import union from '../../assets/Union.svg';
import star from '../../assets/star.svg';
import water from '../../assets/water.svg';

const studyRoom = [
  {
    name: "톡스터디",
    class: "과학사",
    member: 20,
    online: '#00CE8E'
  },
  {
    name: "토론디",
    class: "문글",
    member: 8,
    online: '#B3B3B3'
  }
]

const Home = () => {
  return (
    <div className="h-full bg-[#F1F5F4] p-20">
      <div className='w-full pt-30 px-20 flex justify-center'>
      </div>
      <div className='flex justify-center items-center'>
          <img src={union} alt='말풍선' width='274px' height='60' />
          <div className='absolute text-17 font-extrabold mb-10 '><p>브루디와 D+17일, 물 주세요</p></div>
      </div>
      <div className='flex flex-col items-center py-20'>
        <img src={brudySeed} alt='브루디새싹' width='95px' height='148px' className='py-20' />
        <p className='text-15 font-extrabold'>Lv. 1 - 자라다 만 브루디</p>
        <p className='text-8'>학습을 통해 물을 모아 브루디를 성장시켜 보세요!</p>
      </div>
      <div className='flex'>
        <div className='w-[40%] h-60 bg-white rounded-2xl border-3 mr-[2%] flex justify-evenly'>
          <img src={star} alt="별" width={22} height={20} />
          <div className='flex flex-col justify-center'>
            <p className='text-10'>전체 랭킹</p>
            <p className='text-14 font-extrabold'>상위 35%</p>
          </div>
        </div>
        <div className='w-[58%] h-60 bg-white rounded-2xl border-3 flex justify-evenly mb-20'>
          <img src={water} alt="물방울" width={17} height={25} />
          <div className='flex flex-col justify-center'>
            <p className='text-15 font-extrabold'>12개</p>
            <p className='text-12'>다음 단계까지 8개</p>
          </div>
        </div>
      </div>
      <span className='text-12'>참여 중인 스터디룸</span>
      {studyRoom.map((study) => (
        <div className='w-full h-60 bg-white rounded-2xl border-3 flex my-5 items-center px-20'>
          <p className='text-20 font-extrabold w-[30%]'>{study.name}</p>
          <span className='w-[65%]'>{study.class} | {study.member}/50</span>
          <span 
            className={`w-15 h-15 rounded-full`}
            style={{ backgroundColor: study.online }}
          >
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;