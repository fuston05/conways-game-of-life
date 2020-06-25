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
  cellColor,
  setCellColor
}) => {
  const [formValue, setFormValue]= useState();

  const handleChange= (e) => {
    setCellColor(e.target.value);
  }

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
      <br />
      <hr />
      <br />
      <label htmlFor= 'colorPicker'>Choose a Cell color </label>
      <input
        onChange= {(e) => {handleChange(e)}}
        name= 'colorPicker'
        type= 'color'
        value= {cellColor}
      />
    </div>
  )
}

export default SideBar;