import React from 'react';

//components
import {randomGrid} from './utils/gridFunctions';

//styles
import './SideBar.scss';

const SideBar = ({
  isRunningRef, 
  setIsRunning, 
  setGenCount, 
  setGrid, 
  rowsCount, 
  colsCount}) => {

  return (
    <div className= 'gameSideBar'>
      <h2>Select Starting Pattern</h2>
      <br />
      <p>~<i>Or manually click grid boxes, then click 'Start'</i>~</p>
      <br />
      
      <button onClick={() => randomGrid(
        setIsRunning,
        isRunningRef,
        setGenCount,
        setGrid,
        rowsCount,
        colsCount
      )}>Randomize Grid</button>
    </div>
  )
}

export default SideBar;