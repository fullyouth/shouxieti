
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
  
### [3.数组去重](./src/3.数组去重.js)
```js
export function uniqueArr(arr) {
  return [...new Set(arr)];
}

export function uniqueArr2(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

```
  
### [4.数组扁平化](./src/4.数组扁平化.js)
```js
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
      ret.push(...flat3(arr[i], deep - 1))
    } else {
      ret.push(arr[i])
    }
  }
  return ret
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
  
### [6.发布订阅](./src/6.发布订阅.js)
```js
export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return this;
  }

  emit(eventName,...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
    return this;
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        cb => cb!== callback
      );
    }
    return this;
  }
}

// 使用示例
const emitter = new EventEmitter();

const callback1 = (data) => {
  console.log('Callback 1:', data);
};

const callback2 = (data) => {
  console.log('Callback 2:', data);
};

emitter.on('event1', callback1);
emitter.on('event1', callback2);

emitter.emit('event1', 'Hello from event emitter!');

emitter.off('event1', callback1);

emitter.emit('event1', 'Another emit after removing callback1.');
```
  
### [7.函数柯里化](./src/7.函数柯里化.js)
```js
export function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args,...nextArgs]);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

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
  