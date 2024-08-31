import { compose } from "../src/8.组合函数";

describe('compose function', () => {
  it('组合函数测试0个', () => {
    const composeFn = compose()
    let num = composeFn(5)
    expect(num).toBe(5)
  });
  it('组合函数测试1个', () => {
    const addOne = x => x + 1;

    const composeFn = compose(addOne)
    let num = composeFn(5)
    expect(num).toBe(6)
  });
  it('组合函数测试3个', () => {
    const addOne = x => x + 1;
    const minusOne = x => x - 1;
    const double = x => x * 2;

    const composeFn = compose(addOne, double, minusOne)
    let num = composeFn(5) // (5 - 1) * 2 + 1 = 9
    expect(num).toBe(9)
  });
});