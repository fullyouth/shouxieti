import { uniqueArr, uniqueArr2 } from '../src/3.数组去重'
describe('uniqueArr', () => {
  it('should return a unique array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArray = uniqueArr(arr)
    expect(uniqueArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    const arr = [];
    const uniqueEmptyArray = uniqueArr(arr)
    expect(uniqueEmptyArray).toEqual([]);
  });

  it('should handle arrays with all duplicates', () => {
    const arr = [2, 2, 2];
    const uniqueDuplicateArray = uniqueArr(arr)
    expect(uniqueDuplicateArray).toEqual([2]);
  });
});

describe('uniqueArr2', () => {
  it('should return a unique array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArray = uniqueArr2(arr)
    expect(uniqueArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    const arr = [];
    const uniqueEmptyArray = uniqueArr2(arr)
    expect(uniqueEmptyArray).toEqual([]);
  });

  it('should handle arrays with all duplicates', () => {
    const arr = [2, 2, 2];
    const uniqueDuplicateArray = uniqueArr2(arr)
    expect(uniqueDuplicateArray).toEqual([2]);
  });
});