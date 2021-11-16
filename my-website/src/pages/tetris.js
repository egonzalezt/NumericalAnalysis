import React from 'react';
const Tetris = require('react-tetris');
import '../css/tetris.css'
function tetris() {
  return (
      <div>
      <h1 className="space">Tetris</h1>
      <Tetris
      keyboardControls={{
        // Default values shown here. These will be used if no
        // `keyboardControls` prop is provided.
        down: 'MOVE_DOWN',
        left: 'MOVE_LEFT',
        right: 'MOVE_RIGHT',
        space: 'HARD_DROP',
        z: 'FLIP_COUNTERCLOCKWISE',
        x: 'FLIP_CLOCKWISE',
        up: 'FLIP_CLOCKWISE',
        p: 'TOGGLE_PAUSE',
        c: 'HOLD',
        shift: 'HOLD'
      }}
    >
      {({
        Gameboard,
        PieceQueue,
        points,
        linesCleared,
        state,
        controller
      }) => (
        <div>
          <div className="space">
            <p>Points: {points}</p>
            <p>Lines Cleared: {linesCleared}</p>
          </div>

            <div className="row">
                <div className="space">
                </div>
                <div className="column">
                <Gameboard />
                </div>
                <div className="column">
                    <PieceQueue />
                </div>
            </div>

          {state === 'LOST' && (
            <div>
              <h2>Game Over</h2>
              <button onClick={controller.restart}>New game</button>
            </div>
          )}
        </div>
      )}
    </Tetris>
    <h3 className="space">BACK TO HOME?</h3>
    <a href="/" className="space">YES</a>
    </div>
  );
}

export default tetris;