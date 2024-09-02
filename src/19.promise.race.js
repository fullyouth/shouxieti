export function promiseRace(list) {
  return new Promise((resolve, reject) => {
    list.forEach(p => {
      p.then(resolve, reject)
    })
  })
}