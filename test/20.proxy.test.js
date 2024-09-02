import { myProxy } from "../src/20.proxy";

describe('myProxy functions', () => {
  it('myProxy', async () => {
    const person = {
      name: 'zhq',
      age: 18,
    }
    const personProxy = myProxy(person, {
      get: function (target, key) {
        return target[key]
      },
      set: function(target, key, value) {
        target[key] = value
      }
    })
    return expect(personProxy.name).toEqual('zhq');
  })

  it('myProxy', async () => {
    const person = {
      name: 'zhq',
      age: 18,
    }
    const personProxy = myProxy(person, {
      get: function (target, key) {
        return '我的名字是' + target[key]
      },
      set: function(target, key, value) {
        target[key] = value
      }
    })
    return expect(personProxy.name).toEqual('我的名字是zhq');
  })
  
});