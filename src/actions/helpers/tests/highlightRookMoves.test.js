import { highlightRookMoves } from '../';
import { initBoard } from '../../../store/helpers';

describe('highlightRookMoves', () => {
  test('shows correct moves', () => {
    let board = initBoard();
    board.e[0] = { piece: 'pawn', team: 1 };
    board.e[4] = { piece: 'rook', team: 0 };

    const result = highlightRookMoves({ board }, 'e4');

    expect(result).toEqual(
      ['e3', 'e2', 'e1', 'e0', 'e5', 'e6', 'e7', 'd4', 'c4', 'b4', 'f4']
    );
  });
});
