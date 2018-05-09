import royaltyRow from './royaltyRow';
import pawnRow from './pawnRow';
import nullRow from './nullRow';

/**
 * Returns an initial chess board state.
 *
 * @return {Object}
 */
const initBoard = () => {
  return {
    a: royaltyRow(1),
    b: pawnRow(1),
    c: nullRow(),
    d: nullRow(),
    e: nullRow(),
    f: nullRow(),
    g: pawnRow(0),
    h: royaltyRow(0),
  };
};

export default initBoard;
