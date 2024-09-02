import { promiseRace } from "../src/19.promise.race";

describe('Promise.race', () => {
  it('should resolve with the value of the first promise to resolve', async () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('promise1'), 100));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve('promise2'), 50));

    const result = await promiseRace([promise1, promise2]);
    expect(result).toBe('promise2');
  });

});