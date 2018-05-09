import { movePiece, setActiveTile } from './helpers';

/**
 * Either sets a tile to active or moves the active piece to this tile.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const handleTileClick = (state, tileId) => {
  if (state.activeTile !== null && !state.legalMoves.includes(tileId)) {
    return { activeTile: null, legalMoves: [] };
  } else if (state.activeTile !== null) {
    return movePiece(state, { from: state.activeTile, to: tileId });
  }

  return setActiveTile(state, tileId);
};

export default handleTileClick;
