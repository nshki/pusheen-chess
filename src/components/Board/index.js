import React, { Component } from 'react';
import BoardTile from './BoardTile';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import './style.css';

class Board extends Component {
  render() {
    const { board } = this.props;
    let tiles = [];

    for (const row in board) {
      let rowArray = [];

      board[row].forEach((tile, i) => {
        if (tile === null) {
          rowArray.push(<BoardTile key={`${row}${i}`} />);
        } else {
          rowArray.push(
            <BoardTile
              piece={tile.piece}
              team={tile.team}
              key={`${row}${i}`}
            />
          );
        }
      });

      tiles.push(rowArray);
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

const mapToProps = ({ board }) => ({ board });

export default connect(mapToProps, actions)(({ board }) =>
  <Board board={board} />
);
