import { highlightKnightMoves } from '../';
import { initBoard } from '../../../store/helpers';

describe('highlightKnightMoves', () => {
  test('shows correct moves', () => {
    let board = initBoard();
    board.d[3] = { piece: 'pawn', team: 0 };
    board.c[1] = { piece: 'knight', team: 0 };

    const result = highlightKnightMoves({ board }, 'c1');

    expect(result).toEqual(['a0', 'a2', 'b3', 'e2', 'e0']);
  });
});
