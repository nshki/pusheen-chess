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

/**
 * Returns legal moves for a pawn.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightPawnMoves = (state, tileId) => {
  const { row, col, rowNames, rowIndex, team } = tileData(state, tileId);
  const i1 = (team === 1) ? 1 : -1;
  const i2 = (team === 1) ? 2 : -2;
  const nextRow = rowNames[rowIndex + i1];
  const advanceRow = rowNames[rowIndex + i2];
  let legalMoves = [];

  // Check next row.
  if (tileInBounds(state, nextRow, col) && !tileHasPiece(state, nextRow, col)) {
    legalMoves.push(`${nextRow}${col}`);
  }

  // Check advance row.
  if (
    ((team === 1 && row === 'b') || (team === 0 && row === 'g')) &&
    !tileHasPiece(state, advanceRow, col)
  ) {
    legalMoves.push(`${advanceRow}${col}`);
  }

  // Check captures.
  [-1, 1].forEach((colShift) => {
    if (
      tileInBounds(state, nextRow, col + colShift) &&
      tileHasEnemy(state, nextRow, col + colShift, team)
    ) {
      legalMoves.push(`${nextRow}${col + colShift}`);
    }
  });

  return legalMoves;
};

/**
 * Returns legal moves for a rook.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightRookMoves = (state, tileId) => {
  const { row, col, rowNames, rowIndex, team } = tileData(state, tileId);
  let legalMoves = [];

  // Check left.
  for (let i = col - 1; i >= 0; i--) {
    if (tileHasAlly(state, row, i, team)) { break; }
    legalMoves.push(`${row}${i}`);
    if (tileHasEnemy(state, row, i, team)) { break; }
  }

  // Check right.
  for (let i = col + 1; i < 8; i++) {
    if (tileHasAlly(state, row, i, team)) { break; }
    legalMoves.push(`${row}${i}`);
    if (tileHasEnemy(state, row, i, team)) { break; }
  }

  // Check up.
  for (let i = rowIndex - 1; i >= 0; i--) {
    const currRow = rowNames[i];
    if (tileHasAlly(state, currRow, col, team)) { break; }
    legalMoves.push(`${currRow}${col}`);
    if (tileHasEnemy(state, currRow, col, team)) { break; }
  }

  // Check down.
  for (let i = rowIndex + 1; i < 8; i++) {
    const currRow = rowNames[i];
    if (tileHasAlly(state, currRow, col, team)) { break; }
    legalMoves.push(`${currRow}${col}`);
    if (tileHasEnemy(state, currRow, col, team)) { break; }
  }

  return legalMoves;
};

/**
 * Returns legal moves for a knight.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightKnightMoves = (state, tileId) => {
  const { row, col, rowNames, rowIndex, team } = tileData(state, tileId);
  let legalMoves = [];

  [
    { rowDiff: -1, colDiff: -2 },
    { rowDiff: -2, colDiff: -1 },
    { rowDiff: -2, colDiff: 1 },
    { rowDiff: -1, colDiff: 2 },
    { rowDiff: 1, colDiff: 2 },
    { rowDiff: 2, colDiff: 1 },
    { rowDiff: 2, colDiff: -1 },
    { rowDiff: 1, colDiff: -2 },
  ].forEach(({ rowDiff, colDiff }) => {
    const checkRow = rowNames[rowIndex + rowDiff];
    const checkCol = col + colDiff;

    if (
      tileInBounds(state, checkRow, checkCol) &&
      (
        !tileHasPiece(state, checkRow, checkCol) ||
        tileHasEnemy(state, checkRow, checkCol, team)
      )
    ) {
      legalMoves.push(`${checkRow}${checkCol}`);
    }
  });

  return legalMoves;
};

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
    default:
      break;
  }

  return state;
};

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

  return { activeTile: null, legalMoves: [], board: newBoard };
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
    if (state.activeTile !== null && !state.legalMoves.includes(tileId)) {
      return { activeTile: null, legalMoves: [] };
    } else if (state.activeTile !== null) {
      return movePiece(state, { from: state.activeTile, to: tileId });
    }

    return setActiveTile(state, tileId);
  },
});

export default actions;

export {
  setActiveTile,
  highlightLegalMoves,
  highlightPawnMoves,
  highlightRookMoves,
  highlightKnightMoves,
  movePiece,
};
