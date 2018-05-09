import highlightRookMoves from './highlightRookMoves';
import highlightBishopMoves from './highlightBishopMoves';

/**
 * Returns legal moves for a queen.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightQueenMoves = (state, tileId) => {
  const legalRookMoves = highlightRookMoves(state, tileId);
  const legalBishopMoves = highlightBishopMoves(state, tileId);
  return [...legalRookMoves, ...legalBishopMoves];
};

export default highlightQueenMoves;
