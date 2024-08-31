import { debounce } from "../src/1.防抖";

describe('debounce function', () => {
  let mockFunction;
  let debouncedFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    debouncedFunction = debounce(mockFunction, 500, { immediately: false });
  });

  it('should call the function only after the delay has passed', (done) => {
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    setTimeout(() => {
      expect(mockFunction).toHaveBeenCalledTimes(1);
      done();
    }, 600);
  });

  it('should call the function immediately if options.immediately is true', (done) => {
    const immediatelyDebouncedFunction = debounce(mockFunction, 500, { immediately: true });
    immediatelyDebouncedFunction();
    expect(mockFunction).toHaveBeenCalledTimes(1);
    done();
  });
});