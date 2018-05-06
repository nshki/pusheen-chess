import React, { Component } from 'react';
import BoardTile from './BoardTile';
import './style.css';

class Board extends Component {
  render() {
    let tiles = [];
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    rows.forEach((row, i) => {
      tiles.push([]);

      for (let j = 0; j < 8; j++) {
        let piece, team;

        if (row === 'b' || row === 'g') {
          piece = 'pawn';
          team = (row === 'b') ? 1 : 0;
        } else if (row === 'a' || row === 'h') {
          if (j === 0 || j === 7) {
            piece = 'rook';
          } else if (j === 1 || j === 6) {
            piece = 'knight';
          } else if (j === 2 || j === 5) {
            piece = 'bishop';
          } else if (j === 3) {
            piece = 'queen';
          } else {
            piece = 'king';
          }

          team = (row === 'a') ? 1 : 0;
        }

        tiles[i].push(
          <BoardTile piece={piece} team={team} key={`${row}${j+1}`} />
        );
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
