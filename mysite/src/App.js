import './App.css';
import Myfooter from './components/Footer/footer';
import Myheader from './components/Header/navbar';
import './index.css'
// import { useRef } from 'react';      check for the window's height

function App() {
  // const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <div>
      <Myheader/>
        <div className='flex-wrapper'>This is a short content</div>
        {/* <div>Height: {windowSize.current[1]}</div> */}
      <Myfooter/>
    </div>
  );
}

export default App;
