import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import produce from 'immer';

//components
import Start from './Start_Screen';
import Controls from './Controls';
import Game from './Game';

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
  const [rowsCount, setRowsCount] = useState(30);
  const [colsCount, setColsCount] = useState(rowsCount);

  //speed controls
  const [simSpeed, setSimSpeed] = useState(1000);
  const [speedIncrement, setSpeedIncrement] = useState();
  const [speedDisplay, setSpeedDisplay] = useState(1);

  const [genCount, setGenCount] = useState(1)
  const [squareSize] = useState(20);
  const [isRunning, setIsRunning] = useState(false);

  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < rowsCount; i++) {
      rows.push(Array.from(Array(colsCount), () => 0))
    }
    return rows;
  });

  const clearGrid = () => {
    if(isRunning){
      alert('You must stop the game first');
      return;
    }
    setIsRunning(false);
    setGenCount(1);
    setSpeedDisplay(1);
    setSimSpeed(1000);

    setGrid((currentGrid) => {
      return produce(currentGrid, gridCopy => {
        for (let i = 0; i < rowsCount; i++) {
          for (let k = 0; k < colsCount; k++) {
            gridCopy[i][k] = 0;
          }
        }
      })
    })
  }

  const randomGrid = () => {
    if(isRunning){
      alert('You must stop the game first');
      return;
    }
    setIsRunning(false);
    setGenCount(1);

    setGrid((currentGrid) => {
      return produce(currentGrid, gridCopy => {
        for (let i = 0; i < rowsCount; i++) {
          for (let k = 0; k < colsCount; k++) {
            Math.random() < 0.5 ? gridCopy[i][k] = 0 : gridCopy[i][k] = 1
          }
        }
      })
    })
  }

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

  useEffect(() => {
    if (simSpeed <= 0) {
      setSpeedIncrement(0)
    } else {
      setSpeedIncrement(100)
    }
  }, [simSpeed])

  return (
    <div className="App">
      <Route exact path='/'>
        <Start />
      </Route>

      <Route exact path='/game'>
        <Controls
          setSimSpeed= {setSimSpeed}
          simSpeed= {simSpeed}
          speedDisplay={speedDisplay}
          setSpeedDisplay= {setSpeedDisplay}
          randomGrid={randomGrid}
          clearGrid={clearGrid}
          genCount={genCount}
          isRunningRef={isRunningRef}
          runSimulation={runSimulation}
          running={isRunning}
          setIsRunning={setIsRunning}
        />

        <Game
          isRunning= {isRunning}
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
