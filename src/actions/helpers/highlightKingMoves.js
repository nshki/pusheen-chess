import tileData from './tileData';
import tileInBounds from './tileInBounds';
import tileHasPiece from './tileHasPiece';
import tileHasEnemy from './tileHasEnemy';

/**
 * Returns legal moves for a king.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightKingMoves = (state, tileId) => {
  const { col, rowNames, rowIndex, team } = tileData(state, tileId);
  let legalMoves = [];

  [
    { rowDiff: 0, colDiff: -1 },
    { rowDiff: -1, colDiff: -1 },
    { rowDiff: -1, colDiff: 0 },
    { rowDiff: -1, colDiff: 1 },
    { rowDiff: 0, colDiff: 1 },
    { rowDiff: 1, colDiff: 1 },
    { rowDiff: 1, colDiff: 0 },
    { rowDiff: 1, colDiff: -1 },
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

export default highlightKingMoves;
