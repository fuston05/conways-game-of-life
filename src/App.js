import React, { useState, useRef, useCallback } from 'react';
import { Route } from 'react-router-dom';
import produce from 'immer';

//components
import Start from './Start_Screen';
import Game from './Game';
import SideBar from './SideBar';

//styles
import './App.scss';

// checking neighbor operations
const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];


function App() {

    // set grid size
    const [rowsCount, setRowsCount] = useState(50);
    const [colsCount, setColsCount] = useState(rowsCount);

    //speed controls
    const [simSpeed, setSimSpeed] = useState(1000);

    const [speedDisplay, setSpeedDisplay] = useState(1);

    const [genCount, setGenCount] = useState(1)
    const [squareSize] = useState(rowsCount * 0.25);
    const [isRunning, setIsRunning] = useState(false);

    const [liveCellColor, setLiveCellColor] = useState('#006400');
    const [deadCellColor, setDeadCellColor] = useState('#ffffff');

    const [grid, setGrid] = useState(() => {
        const rows = [];

        for (let i = 0; i < rowsCount; i++) {
            rows.push(Array.from(Array(colsCount), () => 0))
        }
        return rows;
    });

    // refs
    const simSpeedRef = useRef(simSpeed);
    simSpeedRef.current = simSpeed;

    const isRunningRef = useRef(isRunning);
    isRunningRef.current = isRunning;

    const runSimulation = useCallback(() => {
        if (!isRunningRef.current) {
            return;
        }
        setGenCount(c => c + 1);

        setGrid((currentGrid) => {
            return produce(currentGrid, gridCopy => {
                //loop through every cell in the grid
                for (let i = 0; i < rowsCount; i++) {
                    for (let k = 0; k < colsCount; k++) {

                        //get number of live neighbors
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            // check grid bounds
                            if (newI >= 0 && newI < rowsCount && newK >= 0 && newK < colsCount) {
                                neighbors += currentGrid[newI][newK];
                            }//end if
                        })

                        // apply game rules logic
                        if (neighbors < 2 || neighbors > 3) {
                            // kill cell
                            gridCopy[i][k] = 0;
                        } else if (currentGrid[i][k] === 0 && neighbors === 3) {
                            // bring to life
                            gridCopy[i][k] = 1;
                        }
                    }//end cols loop
                }//end rows loop
            })
        })//end setGrid

        setTimeout(runSimulation, simSpeedRef.current);
    }, []);

    return (
        <div className="App">

            <Route exact path='/'>
                <Start />
            </Route>

            <Route exact path='/game'>
                <div className='gameSideBarCont'>

                    <Game
                        squareSize={squareSize}
                        grid={grid}
                        setGrid={setGrid}
                        colsCount={colsCount}
                        isRunningRef={isRunningRef}
                        liveCellColor={liveCellColor}
                        deadCellColor={deadCellColor}
                    />

                    <SideBar
                        speedDisplay={speedDisplay}
                        setSpeedDisplay={setSpeedDisplay}
                        setSimSpeed={setSimSpeed}
                        simSpeed={simSpeed}
                        runSimulation={runSimulation}
                        liveCellColor={liveCellColor}
                        setLiveCellColor={setLiveCellColor}
                        deadCellColor={deadCellColor}
                        setDeadCellColor={setDeadCellColor}
                        setIsRunning={setIsRunning}
                        isRunningRef={isRunningRef}
                        genCount={genCount}
                        setGenCount={setGenCount}
                        setGrid={setGrid}
                        rowsCount={rowsCount}
                        colsCount={colsCount}
                    />
                </div>

            </Route>
        </div>
    );
}

export default App;
