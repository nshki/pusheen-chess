/**
 * Sets the currently active tile if the given tile has a piece.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const setActiveTile = (state, tileId) => {
  const [row, col] = tileId.split('');

  if (state.board[row][col] !== null) {
    return { activeTile: tileId };
  }

  return state;
};

/**
 * Moves tile data from one tile to another.
 *
 * @param {Object} - state
 * @param {Object} - { from: String, to: String }
 * @return {Object}
 */
const movePiece = (state, { from, to }) => {
  const [fromRow, fromCol] = from.split('');
  const [toRow, toCol] = to.split('');
  const newBoard = JSON.parse(JSON.stringify(state.board));

  newBoard[fromRow][fromCol] = null;
  newBoard[toRow][toCol] = state.board[fromRow][fromCol];

  return { activeTile: null, board: newBoard };
};

const actions = (store) => ({
  /**
   * Either sets a tile to active or moves the active piece to this tile.
   *
   * @param {Object} - state
   * @param {String} - tileId
   * @return {Object}
   */
  handleTileClick: (state, tileId) => {
    if (state.activeTile === tileId) {
      return { activeTile: null };
    } else if (state.activeTile !== null) {
      return movePiece(state, { from: state.activeTile, to: tileId });
    }

    return setActiveTile(state, tileId);
  },
});

export default actions;
