// 1. 防抖
export function debounce(fn, delay, options) {
  let timer = null;
  let shouldInvoke = options.immediately // 是否立即执行
  return function(...args) {
    if (shouldInvoke) {
      fn.call(this, ...args)
      shouldInvoke = false
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, ...args)
      shouldInvoke = options.immediately
    }, delay)
  }
}