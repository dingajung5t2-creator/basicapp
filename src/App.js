import './App.css';
import { RiHomeHeartFill } from 'react-icons/ri';
// import Hello from './01/Hello';
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto645 from './05/lotto';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-50'>
        <p>react basic</p>
        <p><RiHomeHeartFill /></p>
      </header>
      <main className='grow w-full flex justify-center items-center'>
        <MyClock />
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto645 /> */}
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        {"\u00A9"} honam
      </footer>
    </div>
  );
}

export default App;
