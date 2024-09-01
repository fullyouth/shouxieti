import { bind } from "../src/13.bind";

describe('bind functions', () => {
  let oriFn = Function.prototype.bind
  beforeEach(() => {
    Function.prototype.bind = bind
  });
  afterEach(() => {
    Function.prototype.bind = oriFn
  });

  it('bind', () => {
    let fn = function(...args) {
      return args.join(',')
    }
    let retFn = fn.bind(this, 'a', 'b')
    let ret = retFn()
    expect(ret).toBe('a,b')
  })

  it('bind context', () => {
    let fn = function (...args) {
      return this.name + this.age + args.join(',')
    }
    let retFn = fn.bind({ name: 'zhq', age: 18 }, 'a', 'b')
    let ret = retFn()
    expect(ret).toBe('zhq18a,b')
  })

  it('bind no function', () => {
    let fn = {
      bind: bind
    }
    try {
      let retFn = fn.bind(undefined, 'a', 'b')
      let ret = retFn?.()
      expect(ret).toBe(undefined)
    } catch (error) {
      
    }
    
  })
});