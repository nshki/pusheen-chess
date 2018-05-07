import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { Pawn, Rook, Knight, Bishop, Queen, King } from '../pieces';

class BoardTile extends Component {
  render() {
    const {
      activeTile,
      legalMoves,
      handleTileClick,
      id,
      piece,
      team,
    } = this.props;
    const activeClass = (activeTile === id) ? 'is-active' : '';
    const legalClass = (legalMoves.includes(id)) ? 'is-legal' : '';

    return (
      <div
        className={`board__tile ${activeClass} ${legalClass}`}
        onClick={() => handleTileClick(id)}
      >
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
  id: PropTypes.string.isRequired,
  piece: PropTypes.oneOf(['pawn', 'rook', 'knight', 'bishop', 'queen', 'king']),
  team: PropTypes.oneOf([0, 1]),
};

const mapToProps = ({ activeTile, legalMoves }) => ({ activeTile, legalMoves });

export default connect(mapToProps, actions)(BoardTile);
