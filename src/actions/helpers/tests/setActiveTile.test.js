import { setActiveTile } from '../';
import { initBoard } from '../../../store/helpers';

const board = initBoard();
const state = { board, activeTile: null, legalMoves: [] };

describe('setActiveTile', () => {
  test('should not set active tile if given id is null', () => {
    const result = setActiveTile(state, 'd3');
    expect(result.activeTile).toEqual(null);
  });

  test('sets active tile if given id is not null', () => {
    const result = setActiveTile(state, 'a0');
    expect(result.activeTile).toEqual('a0');
  });
});
