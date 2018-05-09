import tileData from './tileData';
import tileInBounds from './tileInBounds';
import tileHasPiece from './tileHasPiece';
import tileHasEnemy from './tileHasEnemy';

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

export default highlightPawnMoves;
