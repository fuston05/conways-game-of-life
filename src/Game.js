import React from 'react'

const Game = ({squareSize, grid, colsCount}) => {
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
              return <div key={`${i}-${k}`} style={{
                width: squareSize,
                height: squareSize,
                backgroundColor: grid[i][k] ? 'black' : 'white',
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