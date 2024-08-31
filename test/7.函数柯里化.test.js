import { curry } from '../src/7.函数柯里化'

describe('curry function', () => {
  it('should curry a function correctly', () => {
    function add(a, b, c) {
      return a + b + c;
    }
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
  });

  it('should handle partial application and final call correctly', () => {
    function multiply(a, b, c) {
      return a * b * c;
    }
    const curriedMultiply = curry(multiply);
    const partial = curriedMultiply(2);
    expect(typeof partial).toBe('function');
    const partial2 = partial(3);
    expect(typeof partial2).toBe('function');
    expect(partial2(4)).toBe(24);
  });
});