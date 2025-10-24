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
