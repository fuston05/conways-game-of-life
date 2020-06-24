import React from 'react'

//styles
import './Game.scss';

const Game = ({squareSize, grid, colsCount }) => {

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
                console.log('clicked')
              }}

              style={{
                width: squareSize,
                height: squareSize,
                backgroundColor: grid[i][k] === 1 ? 'black' : undefined,
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