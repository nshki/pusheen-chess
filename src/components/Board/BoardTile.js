import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pawn, Rook, Knight, Bishop, Queen, King } from '../pieces';

class BoardTile extends Component {
  render() {
    const { piece, team } = this.props;

    return (
      <div className="board__tile">
        {piece === 'pawn' && <Pawn team={team} />}
        {piece === 'rook' && <Rook team={team} />}
        {piece === 'knight' && <Knight team={team} />}
        {piece === 'bishop' && <Bishop team={team} />}
        {piece === 'queen' && <Queen team={team} />}
        {piece === 'king' && <King team={team} />}
      </div>
    );
  }
}

BoardTile.propTypes = {
  piece: PropTypes.oneOf(['pawn', 'rook', 'knight', 'bishop', 'queen', 'king']),
  team: PropTypes.oneOf([0, 1]),
};

export default BoardTile;
