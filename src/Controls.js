import React from 'react'
import './Controls.scss';

const Controls = ({
  genCount,
  setIsRunning,
  isRunningRef,
  runSimulation
}) => {

  const disableButton= () => {
    const startButton= document.querySelector('.start');
    startButton.setAttribute('disabled', 'true');
    setTimeout(() => {
      startButton && startButton.removeAttribute('disabled');

    }, 1000)
  }

  return (
    <div className='controlsCont'>

      <button className= 'start'
        onClick={() => {
          disableButton();
          // startButton && startButton.setAttribute('disabled', 'true')
          setIsRunning(!isRunningRef.current);
          isRunningRef.current = true;
          runSimulation();
        }}
      >
        {isRunningRef.current ? 'Stop' : 'Start'}
      </button>
      <button>faster &raquo;</button>
      <button>Slower &laquo;</button>
      <button>Reset Board</button>
      <span>Generation # {genCount}</span>
    </div>
  )
}

export default Controls;
