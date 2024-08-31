export function partial(fn, ...arg) {
  return (...args) => {
    return fn(...arg, ...args)
  }
}

