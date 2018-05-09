/**
 * Returns whether tile coordinates are within the board.
 *
 * @param {Object} - state
 * @param {String} - row
 * @param {Number} - col
 * @return {Boolean}
 */
const tileInBounds = (state, row, col) => {
  return (
    typeof state.board[row] !== 'undefined' &&
    typeof state.board[row][col] !== 'undefined'
  );
};

export default tileInBounds;
