import { highlightKingMoves } from '../';
import { initBoard } from '../../../store/helpers';

describe('highlightKingMoves', () => {
  test('shows correct moves', () => {
    let board = initBoard();
    board.d[5] = { piece: 'pawn', team: 1 };
    board.f[4] = { piece: 'king', team: 0 };

    const result = highlightKingMoves({ board }, 'f4');

    expect(result).toEqual(['f3', 'e3', 'e4', 'e5', 'f5']);
  });
});
