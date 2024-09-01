import { call } from "../src/12.call";

describe('call functions', () => {
  let oriFn = Function.prototype.call
  beforeEach(() => {
    Function.prototype.call = call
  });
  afterEach(() => {
    Function.prototype.call = oriFn
  });

  it('call', () => {
    let fn = function (...args) {
      return args.join(',')
    }
    let ret = fn.call(this, 'a', 'b')
    expect(ret).toBe('a,b')
  })

  it('call context', () => {
    let fn = function (...args) {
      return this.name + this.age + args.join(',')
    }
    let ret = fn.call({ name: 'zhq', age: 18 }, 'a', 'b')
    expect(ret).toBe('zhq18a,b')
  })
});