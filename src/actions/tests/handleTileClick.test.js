import createStore from 'redux-zero';
import actions from '../';
import { initBoard } from '../../store/helpers';

describe('handleTileClick', () => {
  test('sets activeTile to null if the given tile is not legal', () => {
    const board = initBoard();
    const state = { board, activeTile: 'b1', legalMoves: [] };
    const store = createStore(state);

    const result = actions(store).handleTileClick(state, 'b1');

    expect(result.activeTile).toEqual(null);
  });

  test('moves piece if activeTile exists', () => {
    const board = initBoard();
    const state = { board, activeTile: 'b1', legalMoves: ['c1'] };
    const store = createStore(state);

    const result = actions(store).handleTileClick(state, 'c1');

    expect(result.board.c[1].piece).toEqual('pawn');
    expect(result.board.c[1].team).toEqual(1);
  });

  test('sets activeTile if no tile is active', () => {
    const board = initBoard();
    const state = { board, activeTile: null, legalMoves: [] };
    const store = createStore(state);

    const result = actions(store).handleTileClick(state, 'b1');

    expect(result.activeTile).toEqual('b1');
  });
});
