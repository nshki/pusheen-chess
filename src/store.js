import createStore from 'redux-zero';

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

const pawnRow = (team) => {
  let row = [];
  for (let i = 0; i < 8; i++) {
    row.push({ piece: 'pawn', team })
  }
  return row;
};

const nullRow = () => [null, null, null, null, null, null, null, null];

const board = {
  a: royaltyRow(1),
  b: pawnRow(1),
  c: nullRow(),
  d: nullRow(),
  e: nullRow(),
  f: nullRow(),
  g: pawnRow(0),
  h: royaltyRow(0),
};

const initialState = { board: board };
const store = createStore(initialState);

export default store;
