const createRef = () => {
  a = "Reference biro"
  console.log(a)
  return a
}

function createAnotherRef() {
  b = "new ref"
  console.log(b)
  return b
}

createRef()
createAnotherRef()

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

console.clear()

/**
 * Array.Flat polyfill
 */
function flatIt(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatIt(curr) : curr)
  }, [])
}

const arr = [1, [2, 3, [4, 5]], [6, 7], [[[[[[[[[[8]]]]]]]]]]]

const flattened = flatIt(arr)
console.log(flattened)

console.clear()

async function chain() {
  console.log("1")
  await Promise.resolve(setTimeout(() => console.log("5"), 0))
  console.log("2")
  await Promise.resolve(setTimeout(() => console.log("6"), 0))
  console.log("3")
}
// chain()
// setTimeout(() => {
//   console.log("7")
// }, 0)
console.log("4")

console.clear()

console.log(1)
setTimeout(() => console.log(2))
Promise.resolve().then(() => console.log(3))
console.log(4)
