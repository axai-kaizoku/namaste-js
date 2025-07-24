// Currying using bind method

let multiply = function (x, y) {
  console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2) // bind(this, 2, 3) // here this is ignored
let multiplyByThree = multiply.bind(this, 3) // bind(this)

multiplyByTwo(5)
multiplyByThree(5) // 3 * 5 => 15

// Currying using closures

let multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y)
  }
}

let multiplyByTwoClosure = multiplyClosure(2)
let multiplyByThreeClosure = multiplyClosure(3)

multiplyByTwoClosure(2)
multiplyByThreeClosure(2)
