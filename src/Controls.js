import React from 'react'
import './Controls.scss';

const Controls = ({ isRunning, setIsRunning }) => {
  return (
    <div className='controlsCont'>
      <button
        onClick={() => {
          setIsRunning(!isRunning)
        }}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button>faster &raquo;</button>
      <button>Slower &laquo;</button>
      <button>Reset Board</button>
      <span>Generation #</span>
    </div>
  )
}

export default Controls;
