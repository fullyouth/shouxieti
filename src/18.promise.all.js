export function promiseAll(list) {
  return new Promise ((resolve, reject) => {
    if (Array.isArray(list)) {
      let ret = []
      let count = 0
      list.forEach((p, index) => {
        if (isPromise) {
          p.then((data) => {
            ret[index] = data
            count ++
            if (count === list.length) {
              resolve(ret)
            }
          }).catch(err => {
            reject(err)
          })
        } 
      })
    }
  })
}

function isPromise(fn) {
  return typeof fn === 'function' &&  typeof fn.then === 'function'
}