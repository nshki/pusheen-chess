import createStore from 'redux-zero';
import { initBoard } from './helpers';

const board = initBoard();
const state = { board, activeTile: null, legalMoves: [] };
const store = createStore(state);

export default store;
