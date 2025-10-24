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

/**
 * Currying real-world example
 */

/**
 * Send email
 */
function sendEmail(email) {
  return (subject) => {
    return (body) => {
      return `{
        email:${email},
        subject:${subject},
        body: ${body},
      }`
    }
  }
}

const step1 = sendEmail("akshay@gmail.com")
const step2 = step1("This is subject broo")
const step3 = step2("this is body of that email.")
console.log(step3)
