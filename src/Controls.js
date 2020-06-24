import React from 'react'
import './Controls.scss';

//utils
import {speedUpSim, slowDownSim} from './utils/speedControls';
import {clearGrid} from './utils/gridFunctions';

const Controls = ({
  genCount,
  setGenCount,
  setIsRunning,
  isRunningRef,
  runSimulation,
  speedDisplay,
  setSpeedDisplay,
  randomGrid,
  setSimSpeed,
  simSpeed,
  setGrid,
  rowsCount,
  colsCount
}) => {

  const startButton = document.querySelector('.start');

  return (
    <div className='controlsCont'>

      <button className='start'
        onClick={() => {
          startButton.setAttribute('disabled', 'true');

          setIsRunning(!isRunningRef.current);
          isRunningRef.current = true;
          runSimulation();

          // re-enable start button
          setTimeout(() => {
            startButton && startButton.removeAttribute('disabled');
          }, 1000)
        }}
      >
        {isRunningRef.current ? 'Stop' : 'Start'}
      </button>

      <button onClick={() => randomGrid()}>Randomize Grid</button>
      <button onClick={() => speedUpSim(
        simSpeed,
        setSimSpeed,
        setSpeedDisplay
      )}>faster &raquo;</button>

      <span className='speedDisplay'>{speedDisplay}</span>

      <button onClick={() => slowDownSim(
        simSpeed,
        setSimSpeed,
        setSpeedDisplay
      )}>Slower &laquo;</button>
      <button onClick={() => clearGrid(
        setSimSpeed,
        setGrid,
        rowsCount,
        colsCount,
        setIsRunning,
        isRunningRef,
        setGenCount,
        setSpeedDisplay
      )}>Clear Board</button>

      <span className='generationDisplay'>Generation # {genCount}</span>
    </div>
  )
}

export default Controls;
