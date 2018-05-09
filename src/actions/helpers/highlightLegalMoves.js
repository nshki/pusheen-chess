import tileData from './tileData';
import highlightPawnMoves from './highlightPawnMoves';
import highlightRookMoves from './highlightRookMoves';
import highlightKnightMoves from './highlightKnightMoves';
import highlightBishopMoves from './highlightBishopMoves';
import highlightQueenMoves from './highlightQueenMoves';
import highlightKingMoves from './highlightKingMoves';

/**
 * Highlights legal moves for the given tile piece.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const highlightLegalMoves = (state, tileId) => {
  const { piece } = tileData(state, tileId);

  switch (piece) {
    case 'pawn':
      return highlightPawnMoves(state, tileId);
    case 'rook':
      return highlightRookMoves(state, tileId);
    case 'knight':
      return highlightKnightMoves(state, tileId);
    case 'bishop':
      return highlightBishopMoves(state, tileId);
    case 'queen':
      return highlightQueenMoves(state, tileId);
    case 'king':
      return highlightKingMoves(state, tileId);
    default:
      break;
  }

  return state;
};

export default highlightLegalMoves;
