import tileData from './tileData';
import tileHasAlly from './tileHasAlly';
import tileHasEnemy from './tileHasEnemy';

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

export default highlightRookMoves;
