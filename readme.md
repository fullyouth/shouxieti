
# Javascript常见面试手写题

每一个方法都使用jest单元测试进行了验证，自己手写练习的时候可以跑单测进行验证

## 单测报告
- [覆盖率](https://www.haoqi123.com/shouxieti/coverage/lcov-report/index.html)
- [单测概览](https://www.haoqi123.com/shouxieti/html-report/index.html)

### [1.防抖](./src/1.防抖.js)
```js
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
```
  
### [2.节流](./src/2.节流.js)
```js
// 节流函数
export function throttle(fn, delay) {
  let timer = null
  return function (...args) {
    if (!timer) {
      fn.call(this, ...args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    } 
  }
}
```
  
### [5.深浅拷贝](./src/5.深浅拷贝.js)
```js
export function deepClone(obj) {
  if (obj === null || typeof obj!== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
```
  
### [11.AJAX](./src/11.AJAX.js)
```js
// get
export const getJSON = (url) => {
 // test
}

// post
export const postJSON = (url, data) => {
  
}

```
  