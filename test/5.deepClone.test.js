import { deepClone } from '../src/5.deepClone';

describe('deepClone', () => {
  it('should clone a simple object', () => {
    const original = { a: 1, b: 2 };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it('should clone a nested object', () => {
    const original = { a: { c: 3 }, b: 2 };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned.a).not.toBe(original.a);
  });

  it('should clone an array', () => {
    const original = [1, 2, 3];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it('should clone a nested array', () => {
    const original = [1, [2, 3], 4];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned[1]).not.toBe(original[1]);
  });
});