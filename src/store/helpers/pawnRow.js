/**
 * Given a team, produces a row of pawns.
 *
 * @param {Number} - team
 * @param {Array<Object>}
 */
const pawnRow = (team) => {
  let row = [];
  for (let i = 0; i < 8; i++) {
    row.push({ piece: 'pawn', team })
  }
  return row;
};

export default pawnRow;
