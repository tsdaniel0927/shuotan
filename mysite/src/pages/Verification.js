import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { TextField, Button, Collapse } from '@mui/material';
import {useReward} from 'react-rewards'
import './verification.css'

function NameQuestion({ name, handleChange, handleClick, isAnimating }) {
  return (
    <div className="flex-wrapper" style={{flexDirection: 'column', marginTop:'100px'}}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <Collapse in={true}>
            Simple question: What's my name? &emsp;&emsp;
            <TextField
              variant="standard"
              size="small"
              value={name}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleClick(); // Trigger handleClick on Enter key press
                }
              }}
            />
            <Button style={{marginLeft: '5px'}} id='rewardId' onClick={handleClick} disabled={isAnimating}>
              Submit
            </Button>
            <div style={{textAlign:'center', color:'grey', marginTop:'2vh'}}>
              *This is my personal website <br/>
              *It is protected and secure <br/>
              *You will not be asked for personal information
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

function Verify() {
  const [name, setName] = React.useState('');
  const { reward, isAnimating } = useReward('rewardId', 'confetti')
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  
  function capitalizeFirstLetter(myName){
    const nameArray = myName.toLowerCase().split(' ');
    const capitalizedArray = nameArray.map(name => name.charAt(0).toUpperCase() + name.slice(1));
    return capitalizedArray.join(' ');
  }

  function handleChange(e) {
    setName(capitalizeFirstLetter(e.target.value));
  }

  function handleClick() {
    if (name === 'Shuo Tan' || name === 'Daniel Tan' || name === 'Daniel') {
      sessionStorage.setItem('userAnswer', name);
      reward();
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      window.alert('Nope, wrong answer 🥲, try again');
      if(pathname !== '/'){
        navigate('/')
      }
    }
  }

  return (
    <NameQuestion
      name={name}
      handleChange={handleChange}
      handleClick={handleClick}
      isAnimating={isAnimating}
    />
  );
}

export default Verify;
