import './App.css';
import { RiHomeHeartFill } from 'react-icons/ri';
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto645 from './05/lotto';
import Traffic_accident from './06/Traffic_accident';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-50'>
        <p>react basic</p>
        <p><RiHomeHeartFill /></p>
      </header>
      <main className="flex grow w-full flex-col items-center justify-center gap-3">
        {/* flex            // Flexbox 사용
        grow w-full     // 크기
        flex-col        // 세로 방향 배치
        items-center    // 가로(교차축) 가운데 정렬
        justify-center  // 세로(주축) 가운데 정렬
        gap-3           // 자식 요소 간 간격 */}
        {/* <MyClock /> */}

        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto645 /> */}
        <Traffic_accident />
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        {"\u00A9"} honam
      </footer>
    </div>
  );
}

export default App;
