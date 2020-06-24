import React, { useState, useRef, useCallback } from 'react';
import { Route } from 'react-router-dom';
import produce from 'immer';

//components
import Start from './Start_Screen';
import Controls from './Controls';
import Game from './Game';

//styles
import './App.scss';

// set grid size
const rowsCount = 30;
const colsCount = rowsCount;

const operations= [
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
  const [squareSize] = useState(20);
  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < rowsCount; i++) {
      rows.push(Array.from(Array(colsCount), () => 0))
    }
    return rows;
  });
  const [isRunning, setIsRunning] = useState(false);

  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const runSimulation = useCallback(() => {
    if (!isRunningRef.current) {
      return;
    }

    setGrid((currentGrid) => {
      return produce(currentGrid, gridCopy => {
        //loop through every cell in the grid
        for (let i = 0; i < rowsCount; i++) {
          for (let k = 0; k < colsCount; k++) {

            //get number of live neighbors
            let neighbors= 0;
            operations.forEach(([x, y]) => {
              const newI= i + x;
              const newK= k + y;
              // check grid bounds
              if( newI >= 0 && newI < rowsCount && newK >= 0 && newK < colsCount ){
                neighbors+= currentGrid[newI][newK];
              }//end if
            })

            // apply game rules logic
            if(neighbors < 2 || neighbors > 3){
              // kill cell
              gridCopy[i][k]= 0;
            }else if(currentGrid[i][k] === 0 && neighbors === 3){
              // bring to life
              gridCopy[i][k]= 1;
            }
          }//end cols loop
        }//end rows loop
      })
    })//end setGrid

    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <div className="App">
      <Route exact path='/'>
        <Start />
      </Route>

      <Route exact path='/game'>
        <Controls
          isRunningRef= {isRunningRef}
          runSimulation= {runSimulation}
          running={isRunning}
          setIsRunning={setIsRunning}
        />

        <Game
          squareSize={squareSize}
          grid={grid}
          setGrid={setGrid}
          colsCount={colsCount}
        />
      </Route>
    </div>
  );
}

export default App;
