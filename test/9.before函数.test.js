import { before } from "../src/9.before函数";

describe('before function', () => {
  it('before函数测试3次', () => {
    const fn = jest.fn()
    const beforeFn = before(fn, 3)
    beforeFn()
    beforeFn()
    beforeFn()
    beforeFn()
    expect(fn).toHaveBeenCalledTimes(3)
  });
  it('before函数测试0次', () => {
    const fn = jest.fn()
    const beforeFn = before(fn, 0)
    beforeFn()
    beforeFn()
    beforeFn()
    beforeFn()
    expect(fn).toHaveBeenCalledTimes(0)
  });
 
});