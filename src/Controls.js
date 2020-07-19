import React from 'react'
import './Controls.scss';

//utils
import { speedUpSim, slowDownSim } from './utils/speedControls';
import { clearGrid, randomGrid } from './utils/gridFunctions';

const Controls = ({
    liveCellColor,
    setLiveCellColor,
    deadCellColor,
    setDeadCellColor,
    genCount,
    setGenCount,
    setIsRunning,
    isRunningRef,
    runSimulation,
    speedDisplay,
    setSpeedDisplay,
    setSimSpeed,
    simSpeed,
    setGrid,
    rowsCount,
    colsCount
}) => {

    const ToggleDisableStart = () => {
        const startButton = document.querySelector('.start');
        startButton.setAttribute('disabled', 'true');

        setIsRunning(!isRunningRef.current);
        isRunningRef.current = true;
        runSimulation();

        // re-enable start button
        setTimeout(() => {
            startButton.removeAttribute('disabled');
        }, 1000)
    }

    const handleliveChange = (e) => {
        if (isRunningRef.current) {
            return;
        } else {
            setLiveCellColor(e.target.value);
        }
    }
    const handleDeadChange = (e) => {
        if (isRunningRef.current === false) {
            setDeadCellColor(e.target.value);
        }
    }

    return (
        <div className='controlsCont'>

            <button className='start'
                onClick={() => {
                    ToggleDisableStart();
                }}
            >
                {isRunningRef.current ? 'Stop' : 'Start'}
            </button>

            <button onClick={() => randomGrid(
                setIsRunning,
                isRunningRef,
                setGenCount,
                setGrid,
                rowsCount,
                colsCount
            )}>Randomize Grid</button>

            <button onClick={() => clearGrid(
                setSimSpeed,
                setGrid,
                rowsCount,
                colsCount,
                setIsRunning,
                isRunningRef,
                setGenCount,
                setSpeedDisplay
            )}>Clear Grid/Reset</button>

            <span className='speedControlsConst'>
                <button onClick={() => speedUpSim(
                    simSpeed,
                    setSimSpeed,
                    setSpeedDisplay
                )}>faster &raquo;</button>

                <span className='speedDisplay'>&nbsp;<i> Speed: </i>{speedDisplay}&nbsp;</span>

                <button onClick={() => slowDownSim(
                    simSpeed,
                    setSimSpeed,
                    setSpeedDisplay
                )}>Slower &laquo;</button>
            </span>

            <div className='colorPickerCont'>
                <div className='livePicker'>
                    <label htmlFor='liveColorPicker'>Live Cell color: </label>
                    <input
                        onChange={(e) => { handleliveChange(e) }}
                        name='liveColorPicker'
                        type='color'
                        value={liveCellColor}
                    />
                </div>

                <div className='deadPicker'>
                    <label htmlFor='deadColorPicker'>Dead Cell color: </label>
                    <input
                        onChange={(e) => { handleDeadChange(e) }}
                        name='deadColorPicker'
                        type='color'
                        value={deadCellColor}
                    />
                </div>
            </div>

            <span className='generationDisplay'>Generation: {genCount}</span>
        </div>
    )
}

export default Controls;
