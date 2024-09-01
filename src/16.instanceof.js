export function _instanceof(V, F) {
  if (Object.prototype.toString.call(V) !== '[object Object]') {
    return false
  }
  let O = F.prototype
  if (Object.prototype.toString.call(O) !== '[object Object]') {
    return false
  }
  while(true) {
    V = Object.getPrototypeOf(V)
    if (V === null) return false
    if (V === O) return true
  }
}
