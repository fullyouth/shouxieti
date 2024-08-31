/**
 * 从右向左执行
 * https://juejin.cn/post/6844903910834962446
 */
export function compose(...fns) {
  if(fns.length === 0) {
    return val => val
  }
  return function(val) {
    fns.reverse().forEach(fn => {
      val = fn(val)
    })
    return val
  }
}