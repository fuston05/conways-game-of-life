import React from 'react';
import {Link} from 'react-router-dom';

const Start= () => {
  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <p>Introduction</p>
      <p>Rules</p>
      <button><Link to= '/game'>Enter Game</Link></button>
    </div>
  )
}

export default Start;