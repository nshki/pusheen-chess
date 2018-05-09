import tileData from './tileData';
import tileInBounds from './tileInBounds';
import tileHasPiece from './tileHasPiece';
import tileHasEnemy from './tileHasEnemy';

/**
 * Returns legal moves for a knight.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightKnightMoves = (state, tileId) => {
  const { col, rowNames, rowIndex, team } = tileData(state, tileId);
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
    const currRow = rowNames[rowIndex + rowDiff];
    const currCol = col + colDiff;

    if (
      tileInBounds(state, currRow, currCol) &&
      (
        !tileHasPiece(state, currRow, currCol) ||
        tileHasEnemy(state, currRow, currCol, team)
      )
    ) {
      legalMoves.push(`${currRow}${currCol}`);
    }
  });

  return legalMoves;
};

export default highlightKnightMoves;
