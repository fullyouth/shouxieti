export function apply (context, argsArray) {
  if (context === null || context === undefined) {
    context = typeof window !== 'undefined' ? window : global
  }
  context.fn = this
  let ret = context.fn(...Array.from(argsArray))
  delete context.fn
  return ret
}