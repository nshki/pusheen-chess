import highlightLegalMoves from './highlightLegalMoves';
import tileHasPiece from './tileHasPiece';

/**
 * Sets the currently active tile if the given tile has a piece.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const setActiveTile = (state, tileId) => {
  const [row, col] = tileId.split('');

  if (tileHasPiece(state, row, col)) {
    const legalMoves = highlightLegalMoves(state, tileId);
    return { activeTile: tileId, legalMoves };
  }

  return state;
};

export default setActiveTile;
