// 根据指定深度递归地将所有子数组元素拼接到新的数组中
// n默认1
export function flat(arr, n) {
  return arr.flat(n)
}

// 全部扁平化
export function flat2(arr) {
  while(arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr);
  }
  return arr;
}

// 递归法
export function flat3(arr, deep) {
  if (deep === 0) {
    return arr
  }
  let ret = []
  for (let i = 0 ; i < arr.length ; i ++){
    if (Array.isArray(arr[i])) {
      ret.push(...flat(arr[i], deep - 1))
    } else {
      ret.push(arr[i])
    }
  }
  return ret
}

