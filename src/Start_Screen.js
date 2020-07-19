import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './Start_Screen.scss';

const Start = () => {
    return (
        <div className='descCont'>
            <div className='mask'></div>
            <h1>Conway's Game of Life</h1>
            <button className= 'startButton'><Link to='/game'>Check it out</Link></button>

            <div className='textCont'>
                <p>
                    Created by John Conway in 1970, in his pursuit to create an interesting and
                    unpredictable cellular automaton. Interestingly, he created this without the power of modern computing. Conway's Game of Life was created on a Go Board.
        </p>
                <p>
                    This game consists of a 2D grid and cells that exist in one of two states, 'alive' or 'dead'. This state is determined by the state of neighboring cells based  on 4 simple rules:
        </p>
                <ol>
                    <li>Any live cell with fewer than two live neighbors dies, as if by under population.</li>
                    <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
                    <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
                    <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
                </ol>
                <p>
                    You simply create the starting pattern, from there the game plays itself. You just sit back and watch as the cells evolve into very interesting shapes and move around the grid.
        </p>
                <p>
                    The Game of life is Turing Complete and can simulate any other Turing Machine, such as a universal constructor.
        </p>
            </div>
        </div>
    )
}

export default Start;