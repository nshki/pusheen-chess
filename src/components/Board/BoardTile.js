import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pawn, Rook, Knight, Bishop, Queen, King } from '../pieces';

class BoardTile extends Component {
  render() {
    const { piece } = this.props;

    return (
      <div className="board__tile">
        {piece === 'pawn' && <Pawn />}
        {piece === 'rook' && <Rook />}
        {piece === 'knight' && <Knight />}
        {piece === 'bishop' && <Bishop />}
        {piece === 'queen' && <Queen />}
        {piece === 'king' && <King />}
      </div>
    );
  }
}

BoardTile.propTypes = {
  piece: PropTypes.oneOf(['pawn', 'rook', 'knight', 'bishop', 'queen', 'king']),
};

export default BoardTile;
