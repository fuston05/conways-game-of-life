import React, {useState} from 'react';

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
  colsCount,
  liveCellColor,
  deadCellColor,
  setLiveCellColor,
  setDeadCellColor
}) => {

  const handleliveChange= (e) => {
    setLiveCellColor(e.target.value);
  }
  const handleDeadChange= (e) => {
    setDeadCellColor(e.target.value);
  }

  return (
    <div className= 'gameSideBar'>
      <h2>Getting Started</h2>
      <br />
      <p>Select random below</p>
      <p>Or you can Manually click grid boxes, then click 'Start'</p>
      <br />

      <button onClick={() => randomGrid(
        setIsRunning,
        isRunningRef,
        setGenCount,
        setGrid,
        rowsCount,
        colsCount
      )}>Randomize Grid</button>
      <br />
      <hr />
      <br />
      <label htmlFor= 'liveColorPicker'>Live Cell color: </label>
      <input
        onChange= {(e) => {handleliveChange(e)}}
        name= 'liveColorPicker'
        type= 'color'
        value= {liveCellColor}
      />
      <br />
      <label htmlFor= 'deadColorPicker'>Dead Cell color: </label>
      <input
        onChange= {(e) => {handleDeadChange(e)}}
        name= 'deadColorPicker'
        type= 'color'
        value= {deadCellColor}
      />
    </div>
  )
}

export default SideBar;