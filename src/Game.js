import React from 'react';
import produce from 'immer';

//styles
import './Game.scss';

const Game = ({
    liveCellColor,
    deadCellColor,
    isRunningRef,
    squareSize,
    grid,
    setGrid,
    colsCount
}) => {

    return (
        <div className='mainGameCont'>

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
                                    backgroundColor: grid[i][k] === 1 ? liveCellColor : deadCellColor,
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