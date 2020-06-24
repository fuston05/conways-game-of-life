import React from 'react'
import './Controls.scss';

const Controls = ({setIsRunning, isRunningRef, runSimulation }) => {
  return (
    <div className='controlsCont'>
      <button
        onClick={() => {
          setIsRunning(!isRunningRef.current);
          runSimulation();
        }}
      >
        {isRunningRef.current ? 'Stop' : 'Start'}
      </button>
      <button>faster &raquo;</button>
      <button>Slower &laquo;</button>
      <button>Reset Board</button>
      <span>Generation #</span>
    </div>
  )
}

export default Controls;
