/**
 * Given a team, produce a row of non-pawn pieces.
 *
 * @param {Number} - team
 * @return {Array<Object>}
 */
const royaltyRow = (team) => {
  return [
    { piece: 'rook', team },
    { piece: 'knight', team },
    { piece: 'bishop', team },
    { piece: 'queen', team },
    { piece: 'king', team },
    { piece: 'bishop', team },
    { piece: 'knight', team },
    { piece: 'rook', team },
  ];
};

export default royaltyRow;
