import React from 'react';
import produce from 'immer';

//components
import Controls from './Controls';

//styles
import './Game.scss';

const Game = ({
  cellColor,
  runSimulation,
  isRunningRef,
  setIsRunning,
  squareSize,
  grid,
  setGrid,
  colsCount,
  rowsCount,
  setGenCount,
  genCount,
  speedDisplay,
  setSpeedDisplay,
  simSpeed,
  setSimSpeed,
}) => {

  return (
    <div className= 'mainGameCont'>
      <Controls
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
      <div
        className="gameCont"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${colsCount}, ${squareSize}px)`
        }}
      >

        {
          grid.map((rows, i) => {
            return rows.map((col, k) => {
              return <div
                key={`${i}-${k}`}
                onClick={() => {
                  const newGrid = produce(grid, gridCopy => {
                    if (isRunningRef.current) {
                      return;
                    }
                    gridCopy[i][k] = grid[i][k] ? 0 : 1
                  })
                  setGrid(newGrid);
                }}

                style={{
                  width: squareSize,
                  height: squareSize,
                  backgroundColor: grid[i][k] === 1 ? cellColor : undefined,
                  border: '1px solid black',
                  marginBottom: '-1px'
                }} />
            })
          })
        }
      </div>
    </div>
  )
}
export default Game;