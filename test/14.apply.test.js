import { apply } from "../src/14.apply";

describe('apply functions', () => {
  let oriFn = Function.prototype.apply
  beforeEach(() => {
    Function.prototype.apply = apply
  });
  afterEach(() => {
    Function.prototype.apply = oriFn
  });

  it('apply', () => {
    let fn = function (...args) {
      return args.join(',')
    }
    let ret = fn.apply(this, ['a', 'b'])
    expect(ret).toBe('a,b')
  })

  it('apply context', () => {
    let fn = function (...args) {
      return this.name + this.age + args.join(',')
    }
    let ret = fn.apply({ name: 'zhq', age: 18 }, ['a', 'b'])
    expect(ret).toBe('zhq18a,b')
  })
});