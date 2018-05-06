import React, { Component } from 'react';
import BoardTile from './BoardTile';
import { Pawn, Rook, Knight, Bishop, Queen, King } from '../pieces';
import './style.css';

class Board extends Component {
  render() {
    let tiles = [];
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    rows.forEach((row, i) => {
      tiles.push([]);
      for (let j = 0; j < 8; j++) {
        let piece;
        if (row === 'b' || row === 'g') {
          piece = <Pawn />;
        } else if (row === 'a' || row === 'h') {
          if (j === 0 || j === 7) {
            piece = <Rook />;
          } else if (j === 1 || j === 6) {
            piece = <Knight />;
          } else if (j === 2 || j === 5) {
            piece = <Bishop />;
          } else if (j === 3) {
            piece = <Queen />;
          } else {
            piece = <King />;
          }
        }

        tiles[i].push(<BoardTile key={`${row}${j+1}`}>{piece}</BoardTile>);
      }
    });

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
