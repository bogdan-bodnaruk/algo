import { describe, expect, it } from 'vitest';
import { minPathSum } from './task.ts';

describe('minPathSum', () => {
  it('should handle case #1', () => {
    const input = [
      [1, 3, 1, 2, 8],
      [1, 5, 1, 3, 4],
      [4, 2, 1, 6, 7],
      [4, 1, 5, 3, 2],
      [1, 2, 4, 7, 1]
    ];

    const actual = minPathSum(input);
    const expected = 18;

    expect(actual).toBe(expected);
  });

  it('should handle case #2', () => {
    const input = [
      [2, 1, 3, 4, 5],
      [6, 7, 2, 1, 2],
      [5, 1, 1, 3, 6],
      [1, 1, 1, 2, 1],
      [3, 4, 1, 2, 1]
    ];

    const actual = minPathSum(input);
    const expected = 14;

    expect(actual).toBe(expected);
  });

  it('should handle case #3', () => {
    const input = [
      [5, 3, 2, 1, 6],
      [4, 6, 5, 2, 1],
      [3, 2, 1, 6, 4],
      [2, 1, 6, 4, 2],
      [1, 5, 4, 3, 2]
    ];

    const actual = minPathSum(input);
    const expected = 22;

    expect(actual).toBe(expected);
  });

  it('should handle case #4', () => {
    const input = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]
    ];

    const actual = minPathSum(input);
    const expected = 19;

    expect(actual).toBe(expected);
  });

  it('should handle case #5', () => {
    const input = [
      [1, 2, 3, 4, 1],
      [1, 1, 1, 1, 1],
      [3, 2, 2, 2, 1],
      [4, 5, 6, 7, 1],
      [5, 4, 3, 2, 1]
    ];

    const actual = minPathSum(input);
    const expected = 9;

    expect(actual).toBe(expected);
  });

  it('should handle case #6', () => {
    const input = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ];

    const actual = minPathSum(input);
    const expected = 7;

    expect(actual).toBe(expected);
  });
});
