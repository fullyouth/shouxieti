import { flat, flat2, flat3 } from '../src/4.数组扁平化'

describe('flat1', () => {
  it('should flatten a simple nested array', () => {
    const input = [1, [2, 5], 6];
    const expectedOutput = [1, 2, 5, 6];
    expect(flat(input, 1)).toEqual(expectedOutput);
  });
});

describe('flat2', () => {
  it('should flatten a simple nested array', () => {
    const input = [1, [2, [3, 4], 5], 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    expect(flat2(input)).toEqual(expectedOutput);
  });

  it('should handle empty arrays', () => {
    const input = [];
    const expectedOutput = [];
    expect(flat2(input)).toEqual(expectedOutput);
  });

  it('should handle arrays with no nesting', () => {
    const input = [1, 2, 3];
    const expectedOutput = [1, 2, 3];
    expect(flat2(input)).toEqual(expectedOutput);
  });
});

describe('flat3', () => {
  it('should flatten a simple nested array', () => {
    const input = [1, [2, [3, 4], 5], 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    expect(flat3(input)).toEqual(expectedOutput);
  });

  it('should handle empty arrays', () => {
    const input = [];
    const expectedOutput = [];
    expect(flat3(input)).toEqual(expectedOutput);
  });

  it('should handle arrays with no nesting', () => {
    const input = [1, 2, 3];
    const expectedOutput = [1, 2, 3];
    expect(flat3(input)).toEqual(expectedOutput);
  });

  it('should handle arrays with no nesting', () => {
    const input = [1, 2, 3, [4,[5]]];
    const expectedOutput = [1, 2, 3, 4, [5]];
    expect(flat3(input, 1)).toEqual(expectedOutput);
  });
});