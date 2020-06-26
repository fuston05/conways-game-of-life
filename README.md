# Conway's Game of Life   

Created by John Conway in 1970, in his pursuit to create an interesting and unpredictable cellular automaton. Interestingly, he created this without the power of modern computing. Conway's Game of Life was created on a Go Board.   

This game consists of a 2D grid and cells that exist in one of two states, 'alive' or 'dead'. This state is determined by the state of neighboring cells based  on 4 simple rules:   

1.  Any live cell with fewer than two live neighbors dies, as if by under population.
2.  Any live cell with two or three live neighbors lives on to the next generation.
3.  Any live cell with more than three live neighbors dies, as if by overpopulation.
4.  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.   

You simply create the starting pattern, from there the game plays itself. You just sit back and watch as the cells evolve into very interesting shapes and move around the grid.   

The Game of life is Turing Complete and can simulate any other Turing Machine, such as a universal constructor.   

____________________________________________________________________________   

This application is built using create-react-app, by Scott Fuston.   

[Check out the Live Site](https://conwaygameoflife.netlify.app/)   

____________________________________________________________________________   

## Features   

1.  User can change the color of the cells, both 'alive' and 'dead'.   
2.  User can select a 'random' starting pattern while the game is stopped.   
3.  User can manually select cell patterns for the starting pattern.   
4.  User has the ability to increase and decrease simulation speed.   
5.  User can reset the board if the game is not currently running.   
6.  Start/stop button.   
7.  Generation counter.   

