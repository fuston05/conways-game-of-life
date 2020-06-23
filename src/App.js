import React, { useState } from 'react';
import { Route } from 'react-router-dom';

//components
import Start from './Start_Screen';
import Controls from './Controls';
import Game from './Game';

// set grid size
const rowsCount = 25;
const colsCount = rowsCount;

function App() {
  const [squareSize, setSquareSize] = useState(20);
  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < rowsCount; i++) {
      rows.push(Array.from(Array(colsCount), () => 0))
    }
    return rows;
  })

  return (
    <div className="App">
      <Route exact path='/'>
        <Start />
      </Route>

      <Route exact path='/game'>
        <Controls />
        
        <Game
          squareSize={squareSize}
          grid={grid}
          colsCount={colsCount}
        />
      </Route>
    </div>
  );
}

export default App;
