import createStore from 'redux-zero';
import actions, {
  setActiveTile,
  highlightLegalMoves,
  highlightPawnMoves,
  movePiece,
} from './actions';
import { board } from './store';

const initialState = { board, activeTile: null, legalMoves: [] };

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

describe('highlightPawnMoves', () => {
  test('gives starter moves', () => {
    const t1Result = highlightPawnMoves(initialState, 'b4');
    const t0Result = highlightPawnMoves(initialState, 'g6');
    expect(t1Result).toEqual(['c4', 'd4']);
    expect(t0Result).toEqual(['f6', 'e6']);
  });

  test('gives capture moves', () => {
    let newBoard = JSON.parse(JSON.stringify(initialState.board));
    newBoard.g[1] = { piece: 'pawn', team: 1 };
    newBoard.b[7] = { piece: 'pawn', team: 0 };
    const modifiedState = { ...initialState, board: newBoard };
    const t1Result = highlightPawnMoves({ board: newBoard }, 'g1');
    const t0Result = highlightPawnMoves({ board: newBoard }, 'b7');
    expect(t1Result).toEqual(['h0', 'h2']);
    expect(t0Result).toEqual(['a6', 'a8']);
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
  test('sets activeTile to null if the given tile is not legal', () => {
    const modifiedState = { ...initialState, activeTile: 'b1' };
    const result = actions(store).handleTileClick(modifiedState, 'b1');
    expect(result.activeTile).toEqual(null);
  });

  test('moves piece if activeTile exists', () => {
    const modifiedState = {
      ...initialState,
      activeTile: 'b1',
      legalMoves: ['c1']
    };
    const result = actions(store).handleTileClick(modifiedState, 'c1');
    expect(result.board.c[1].piece).toEqual('pawn');
    expect(result.board.c[1].team).toEqual(1);
  });

  test('sets activeTile if no tile is active', () => {
    const result = actions(store).handleTileClick(initialState, 'b1');
    expect(result.activeTile).toEqual('b1');
  });
});
