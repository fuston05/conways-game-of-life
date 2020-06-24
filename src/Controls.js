import React from 'react'
import './Controls.scss';

const Controls = ({
  genCount,
  setIsRunning,
  isRunningRef,
  runSimulation,
  clearGrid,
  randomGrid
}) => {

  const disableStart= () => {
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
          disableStart();
          setIsRunning(!isRunningRef.current);
          isRunningRef.current = true;
          runSimulation();
        }}
      >
        {isRunningRef.current ? 'Stop' : 'Start'}
      </button>
      <button onClick= {() => randomGrid()}>Randomize Grid</button>
      <button>faster &raquo;</button>
      <button>Slower &laquo;</button>
      <button onClick= {() => clearGrid()}>Clear Board</button>
      <span>Generation # {genCount}</span>
    </div>
  )
}

export default Controls;
