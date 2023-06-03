import React, {useEffect} from 'react';
import {useReward} from 'react-rewards';
import { TextField, Button, Collapse } from '@mui/material';
import './App.css';
import Myfooter from './components/Footer/footer';
import Myheader from './components/Header/navbar';


function App() {
  const [name, setName] = React.useState('')
  const [showcontent, setShowcontent] = React.useState(false)
  const [showquestion, setShowquestion] = React.useState(true)
  const {reward, isAnimating} = useReward('rewardID', 'confetti')

  // check this one later, when page routing done
  useEffect(() => {
    const storedName = localStorage.getItem('userAnswer');
    if (storedName === 'Shuo Tan') {
      console.log('local storage has been accessed')
      setShowcontent(true);
      setShowquestion(false);
    }
  }, []);

  function handleChange(e){
    setName(e.target.value)
  }

  function handleClick(){
    if(name === 'Shuo Tan'){
      reward()
      setTimeout(() => {setShowcontent(true);setShowquestion(false)}, 2000);
    }else{
      window.alert('Nope, wrong anwser 🥲, try again')
    }
  }

  return (
    <div>
      <Myheader/>
      <div className='flex-wrapper'>
        <div className='container'>
          <div style={{
            marginTop: showcontent ? '0' : '100px',
            textAlign: showcontent ? 'center':''
          }}>
            <Collapse in={showquestion}>
              What's my name again? &emsp;&emsp; 
              <TextField variant='standard' size='small' value={name} onChange={handleChange}></TextField>
              <Button id='rewardID' onClick={handleClick} disabled={isAnimating}> This should be it!</Button>
            </Collapse>        
          </div>
        </div>
        <div style={{
            marginTop: showcontent ? '0' : ''
          }}>
            {showcontent && (
              <Collapse in={showcontent}>
                <p className='sub-heading'>About</p>
              </Collapse>
            )} 
          </div>
      </div>
      <Myfooter/>
    </div>
  );
}

export default App;
