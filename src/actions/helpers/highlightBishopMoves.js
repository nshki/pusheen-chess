import tileData from './tileData';
import tileInBounds from './tileInBounds';
import tileHasAlly from './tileHasAlly';
import tileHasEnemy from './tileHasEnemy';

/**
 * Returns legal moves for a bishop.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Array<String>}
 */
const highlightBishopMoves = (state, tileId) => {
  const { col, rowNames, rowIndex, team } = tileData(state, tileId);
  const directions = [
    { rowDir: -1, colDir: -1 },
    { rowDir: -1, colDir: 1 },
    { rowDir: 1, colDir: 1 },
    { rowDir: 1, colDir: -1 },
  ];
  let legalMoves = [];

  for (let i = 0; i < directions.length; i++) {
    const { rowDir, colDir } = directions[i];

    for (let j = 1; j < 8; j++) {
      const currRow = rowNames[rowIndex + (j * rowDir)];
      const currCol = col + (j * colDir);

      if (
        !tileInBounds(state, currRow, currCol) ||
        tileHasAlly(state, currRow, currCol, team)
      ) {
        break;
      }

      legalMoves.push(`${currRow}${currCol}`);
      if (tileHasEnemy(state, currRow, currCol, team)) { break; }
    }
  }

  return legalMoves;
};

export default highlightBishopMoves;
