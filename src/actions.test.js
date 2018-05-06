import createStore from 'redux-zero';
import actions, { setActiveTile, movePiece } from './actions';
import { board } from './store';

const initialState = { board, activeTile: null };

let store = createStore(initialState);

describe('setActiveTile', () => {
  test('should not set active tile if given id is null', () => {
    const result = setActiveTile(initialState, 'd3');
    expect(result.activeTile).toEqual(null);
  });

  test('sets active tile if given id is not null', () => {
    const result = setActiveTile(initialState, 'a0');
    expect(result.activeTile).toEqual('a0');
  });
});

describe('movePiece', () => {
  test('sets from tile to null', () => {
    const result = movePiece(initialState, { from: 'b1', to: 'c1' });
    expect(result.board.b[1]).toEqual(null);
  });

  test("sets to tile to from tile's piece", () => {
    const result = movePiece(initialState, { from: 'b1', to: 'c1' });
    expect(result.board.c[1].piece).toEqual('pawn');
  });

  test('sets activeTile to null', () => {
    const modifiedState = { ...initialState, activeTile: 'b1' };
    const result = movePiece(initialState, { from: 'b1', to: 'c1' });
    expect(result.activeTile).toEqual(null);
  });
});

describe('handleTileClick', () => {
  test('sets activeTile to null if the activeTile is the given tile', () => {
    const modifiedState = { ...initialState, activeTile: 'b1' };
    const result = actions(store).handleTileClick(modifiedState, 'b1');
    expect(result.activeTile).toEqual(null);
  });

  test('moves piece if activeTile exists', () => {
    const modifiedState = { ...initialState, activeTile: 'b1' };
    const result = actions(store).handleTileClick(modifiedState, 'c1');
    expect(result.board.c[1].piece).toEqual('pawn');
    expect(result.board.c[1].team).toEqual(1);
  });

  test('sets activeTile if no tile is active', () => {
    const result = actions(store).handleTileClick(initialState, 'b1');
    expect(result.activeTile).toEqual('b1');
  });
});
