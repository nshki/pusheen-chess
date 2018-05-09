/**
 * Helper. Returns detailed tile data.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const tileData = (state, tileId) => {
  const [row, _col] = tileId.split('');
  const col = parseInt(_col, 10);
  const rowNames = Object.keys(state.board);
  const rowIndex = rowNames.indexOf(row);
  const { piece, team } = state.board[row][col];
  return { row, col, rowNames, rowIndex, piece, team };
};

export default tileData;
