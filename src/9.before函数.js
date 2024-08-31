/**
 * 指定函数调用次数
 */
export function before (fn, times) {
  return (...args) => {
    if (times === 0) return
    fn(...args)
    if (times > 0) {
      times-- 
    }
  }
}