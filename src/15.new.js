export function _new(constructor, ...args) {  
  // let obj = {}                            // 1. 创建一个空对象({})
  // obj.__proto__ = constructor.prototype          // 2. 链接该对象到另外一个对象
  let obj = Object.create(constructor.prototype)    // 替代1 2
  const ret = constructor.call(obj, ...args) // 3. 将创建的空对象作为this的上下文
  return typeof ret === 'object' ? ret : obj // 4. 如果该函数没有返回对象，则返回this
}