import React from 'react';
import produce from 'immer';

//styles
import './Game.scss';

const Game = ({isRunning, squareSize, grid, setGrid, colsCount }) => {

  return (
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
              onClick= {() => {
                const newGrid= produce(grid, gridCopy => {
                  if(isRunning){
                    return;
                  }
                  gridCopy[i][k]= grid[i][k] ? 0 : 1
                })
                setGrid(newGrid);
              }}

              style={{
                width: squareSize,
                height: squareSize,
                backgroundColor: grid[i][k] === 1 ? 'green' : undefined,
                border: '1px solid black',
                marginBottom: '-1px'
              }} />
          })
        })
      }
    </div>
  )
}
export default Game;