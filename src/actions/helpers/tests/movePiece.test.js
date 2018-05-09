import { movePiece } from '../';
import { initBoard } from '../../../store/helpers';

const board = initBoard();
const state = { board, activeTile: null, legalMoves: [] };

describe('movePiece', () => {
  test('sets from tile to null', () => {
    const result = movePiece(state, { from: 'b1', to: 'c1' });
    expect(result.board.b[1]).toEqual(null);
  });

  test("sets to tile to from tile's piece", () => {
    const result = movePiece(state, { from: 'b1', to: 'c1' });
    expect(result.board.c[1].piece).toEqual('pawn');
  });

  test('sets activeTile to null', () => {
    const newState = { ...state, activeTile: 'b1' };
    const result = movePiece(newState, { from: 'b1', to: 'c1' });
    expect(result.activeTile).toEqual(null);
  });
});
