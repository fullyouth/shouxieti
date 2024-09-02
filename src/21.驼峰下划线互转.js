// 下划线转驼峰
export function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}
// 驼峰转下划线
export function camelToSnake(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}