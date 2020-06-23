import React from 'react'
import './Controls.css';

const Controls = () => {
  return (
    <div className= 'controlsCont'>
      <button>Start</button>
      <button>Stop</button>
      <button>faster &raquo;</button>
      <button>Slower &laquo;</button>
      <button>Reset Board</button>
      <span>Generation #</span>
    </div>
  )
}

export default Controls;
