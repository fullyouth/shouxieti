export function call(context, ...args) {
  if (context === null || context === undefined) {
    context = typeof window !== 'undefined' ? window : global
  } else {
    context = Object(context) // 原始值会被包装 如果是非原始值会直接返回
  }
  context.fn = this;
  let ret = context.fn(...args)
  delete context.fn
  return ret
}