import React from 'react';
import {useReward} from 'react-rewards'
import { TextField, Button, Collapse } from '@mui/material';
import './App.css';
import Myfooter from './components/Footer/footer';
import Myheader from './components/Header/navbar';


function App() {
  const [name, setName] = React.useState('')
  const [showcontent, setShowcontent] = React.useState(false)
  const [showquestion, setShowquestion] = React.useState(true)
  const {reward, isAnimating} = useReward('rewardID', 'confetti')

  function handleChange(e){
    setName(e.target.value)
  }

  

  function handleClick(){
    if(name === 'Shuo Tan'){
      reward()

      setShowcontent(true)
      setShowquestion(false)
    }else{
      window.alert('Nope, wrong anwser 🥲, try again')
    }
  }

  return (
    <div>
      <Myheader/>
      <div className='flex-wrapper'>
        <div style={{  color: "grey"}}>
          <Collapse in={showquestion}>
            what's my name again? &emsp;&emsp; 
            <TextField variant='standard' size='small' value={name} onChange={handleChange}></TextField>
            <Button id='rewardID' onClick={handleClick} disabled={isAnimating}> This is it!</Button>
          </Collapse>
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
