export function bind(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let self = this
  let fBound = function (...args2) {
    return self.call(this instanceof self ? this : context, ...args, ...args2)
  }
  fBound.prototype = Object.create(self.prototype)
  return fBound
}