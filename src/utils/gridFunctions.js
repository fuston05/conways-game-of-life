import produce from 'immer';

export const clearGrid = (
  setSimSpeed,
  setGrid, 
  rowsCount, 
  colsCount, 
  setIsRunning,
  isRunningref,
  setGenCount,
  setSpeedDisplay,
  ) => {
    
  if(isRunningref.current){
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