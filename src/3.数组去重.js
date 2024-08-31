export function uniqueArr(arr) {
  return [...new Set(arr)];
}

export function uniqueArr2(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
