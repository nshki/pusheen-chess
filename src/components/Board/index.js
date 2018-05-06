import React, { Component } from 'react';
import BoardTile from './BoardTile';
import './style.css';

class Board extends Component {
  render() {
    let tiles = [];
    for (let i = 0; i < 8; i++) {
      tiles.push([]);
      for (let j = 0; j < 8; j++) {
        tiles[i].push(<BoardTile key={`col-${j}`} />);
      }
    }

    return (
      <div className="board">
        {tiles.map((row, i) =>
          <div className="board__row" key={`row-${i}`}>
            {row.map((tile, j) => tile)}
          </div>
        )}
      </div>
    );
  }
}

export default Board;
