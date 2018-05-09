/**
 * Returns whether or not tile coordinates have a piece.
 *
 * @param {Object} - state
 * @param {String} - row
 * @param {Number} - col
 * @return {Boolean}
 */
const tileHasPiece = (state, row, col) => {
  return (state.board[row][col] !== null);
};

export default tileHasPiece;
