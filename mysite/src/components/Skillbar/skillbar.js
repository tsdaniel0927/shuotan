import React from 'react';
import './LiquidBar.css';

const LiquidBar = ({ skill, score }) => {
  const filledStyle = {
    width: `${score}%`
  };

  return (
    <div className="liquid-bar-container">
      <div className="liquid-bar-title">{skill}</div>
      <div className="liquid-bar-outer">
        <div className="liquid-bar-inner-large" style={filledStyle}>
          <div className='liquid-bar-inner-small'></div>
        </div>
      </div>
    </div>
  );
};

export default LiquidBar;
