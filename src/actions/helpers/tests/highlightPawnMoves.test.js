import { highlightPawnMoves } from '../';
import { initBoard } from '../../../store/helpers';

describe('highlightPawnMoves', () => {
  test('gives starter moves', () => {
    const board = initBoard();

    const t1Result = highlightPawnMoves({ board }, 'b4');
    const t0Result = highlightPawnMoves({ board }, 'g6');

    expect(t1Result).toEqual(['c4', 'd4']);
    expect(t0Result).toEqual(['f6', 'e6']);
  });

  test('prevent two space if piece is in front', () => {
    const board = initBoard();
    board.f[6] = { piece: 'pawn', team: 0 };

    const result = highlightPawnMoves({ board }, 'g6');

    expect(result).toEqual([]);
  });

  test('gives capture moves', () => {
    let board = initBoard();
    board.g[1] = { piece: 'pawn', team: 1 };
    board.b[7] = { piece: 'pawn', team: 0 };

    const t1Result = highlightPawnMoves({ board }, 'g1');
    const t0Result = highlightPawnMoves({ board }, 'b7');

    expect(t1Result).toEqual(['h0', 'h2']);
    expect(t0Result).toEqual(['a6']);
  });
});
