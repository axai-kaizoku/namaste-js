// this is a closure
// function x() {
//   var a = 15

//   function y() {
//     console.log(a)
//   }
//   y()
// }

// x()

// function x() {
//   var a = 15
//   function y() {
//     console.log(a)
//   }
//   return y
// }

// var z = x()
// console.log(z)
// //.........
// z()

function z() {
  var b = 90

  function x() {
    var a = 10
    function y() {
      console.log(a, b)
    }
    y()
  }
  x()
}

z()
// const one = z()
// console.log(one)
// const two = one()
// const three = two()
// console.log(two())

/**
 * [memoization] Real example
 * useCallback
 */

console.clear()
function memoize(func) {
  const cache = {}

  return function (...args) {
    const key = JSON.stringify(args)
    if (key in cache) {
      return cache[key]
    }
    const res = func(...args)
    console.log("computing")
    cache[key] = res
    return res
  }
}

const callable = memoize((x, y) => {
  return x * y
})

console.log(callable(2, 3))
console.log(callable(2, 3))
