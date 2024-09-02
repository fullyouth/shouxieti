import { promiseAll } from "../src/18.promise.all";

describe('PromiseAll functions', () => {
  it('PromiseAll', async () => {
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);
    const promise3 = Promise.resolve(3);
    let ret = await promiseAll([promise1, promise2, promise3])
    return expect(ret).toEqual([1, 2, 3]);
  })
  
});