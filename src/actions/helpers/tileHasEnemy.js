import tileHasPiece from './tileHasPiece';

/**
 * Returns whether or not tile coordinates have an opposing piece.
 *
 * @param {Object} - state
 * @param {String} - row
 * @param {Number} - col
 * @param {Number} - team
 * @return {Boolean}
 */
const tileHasEnemy = (state, row, col, team) => {
  return tileHasPiece(state, row, col) && state.board[row][col].team !== team;
};

export default tileHasEnemy;
