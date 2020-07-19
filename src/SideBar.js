import React from 'react';

//components
import Controls from './Controls';

//styles
import './SideBar.scss';

const SideBar = ({
  runSimulation,
  speedDisplay,
  setSpeedDisplay,
  simSpeed,
  setSimSpeed,
  isRunningRef,
  setIsRunning,
  genCount,
  setGenCount,
  setGrid,
  rowsCount,
  colsCount,
  liveCellColor,
  deadCellColor,
  setLiveCellColor,
  setDeadCellColor
}) => {

  return (
    <div className='gameSideBar'>
      <h2>Getting Started</h2>
      <br />
      <p>Select random below</p>
      <p>Or you can Manually click grid boxes, then click 'Start'</p>
      <br />

      <Controls
        liveCellColor= {liveCellColor}
        setLiveCellColor= {setLiveCellColor}
        deadCellColor= {deadCellColor}
        setDeadCellColor= {setDeadCellColor}
        runSimulation={runSimulation}
        setGrid={setGrid}
        rowsCount={rowsCount}
        colsCount={colsCount}
        setSimSpeed={setSimSpeed}
        simSpeed={simSpeed}
        speedDisplay={speedDisplay}
        setSpeedDisplay={setSpeedDisplay}
        genCount={genCount}
        setGenCount={setGenCount}
        setIsRunning={setIsRunning}
        isRunningRef={isRunningRef}
      />
    </div>
  )
}

export default SideBar;