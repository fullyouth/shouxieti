import { throttle } from '../src/2.节流'
// 测试用例
describe('throttle function', () => {
  let mockFunction;
  let throttledFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    throttledFunction = throttle(mockFunction, 100);
  });

  it('should call the function only once within the delay period', (done) => {
    throttledFunction();
    throttledFunction();
    throttledFunction();

    // 等待一段时间确保节流生效
    setTimeout(() => {
      expect(mockFunction).toHaveBeenCalledTimes(1);
      done();
    }, 150);
  });
});