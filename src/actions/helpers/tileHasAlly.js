import tileHasPiece from './tileHasPiece';

/**
 * Returns whether or not tile coordinates have a team piece.
 *
 * @param {Object} - state
 * @param {String} - row
 * @param {Number} - col
 * @param {Number} - team
 * @return {Boolean}
 */
const tileHasAlly = (state, row, col, team) => {
  return tileHasPiece(state, row, col) && state.board[row][col].team === team;
};

export default tileHasAlly;
