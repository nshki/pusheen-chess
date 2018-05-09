import { highlightBishopMoves } from '../';
import { initBoard } from '../../../store/helpers';

describe('highlightBishopMoves', () => {
  test('shows correct moves', () => {
    let board = initBoard();
    board.e[2] = { piece: 'bishop', team: 0 };

    const result = highlightBishopMoves({ board }, 'e2');

    expect(result).toEqual(['d1', 'c0', 'd3', 'c4', 'b5', 'f3', 'f1']);
  });
});
