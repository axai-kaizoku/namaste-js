/**
 * Promise.all
 * Promise.allSettled
 * Promise.race
 * Promise.any
 * Promise.resolve
 * Promise.reject
 */

function createPromise(ms = 1500, value = 1, isReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject) {
        reject(value)
      } else {
        resolve(value)
      }
    }, ms)
  })
}

const p1 = createPromise(3000, "p1 Success", true)
const p2 = createPromise(1000, "p2 Success", true)
const p3 = createPromise(2000, "p3 Success", true)

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
    console.log(err.errors)
  })
