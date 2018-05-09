import { highlightQueenMoves } from '../';
import { initBoard } from '../../../store/helpers';

describe('highlightQueenMoves', () => {
  test('shows correct moves', () => {
    let board = initBoard();
    board.e[1] = { piece: 'queen', team: 0 };
    const rookLegalMoves = [
      'e0', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'd1', 'c1', 'b1', 'f1'
    ];
    const bishopLegalMoves = [
      'd0', 'd2', 'c3', 'b4', 'f2', 'f0'
    ];

    const result = highlightQueenMoves({ board }, 'e1');
      
    expect(result).toEqual([...rookLegalMoves, ...bishopLegalMoves]);
  });
});
