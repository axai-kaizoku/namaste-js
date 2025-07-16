/**
 * Example 1
 */
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved !")
  }, 4000)
})

/**
 * await can only be used inside an async function
 */
async function handlePromise() {
  console.log("Hello World !")
  /**
   * Here, JS Engine was waiting for promise to resolve
   */
  const val = await p
  console.log("Namaste JavaScript")
  console.log(val)

  const val2 = p.then((val2) => console.log(val2))
  console.log("Namaste JavaScript 2")
  console.log(val2)
}

/**
 * OUTPUT:
 * Hello World !
 * Namaste JavaScript
 * Promise Resolved !
 * Namaste JavaScript 2
 * Promise { <pending> }
 * Promise Resolved !
 */

handlePromise()

// function getData() {
//   /**
//    * Here, JS Engine will not wait for promise to resolve
//    * It will move to next line and print "Namaste JavaScript"
//    * and then when promise is resolved, it will print the resolved value
//    */
//   p.then((res) => console.log(res))
//   console.log("Namaste JavaScript")
// }

// getData()

/**
 * Example 2
 */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("8000ms Promise Resolved ")
  }, 8000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("4000ms Promise Resolved !")
  }, 4000)
})

async function handlePromise() {
  console.log("Hello World !")
  /**
   * Here, p2 will also wait for first promise to resolve
   * and then it will resolve
   */
  const val = await p1
  console.log("Namaste JavaScript")
  console.log(val)

  const val2 = await p2
  console.log("Namaste JavaScript 2")
  console.log(val2)
}

/**
 * OUTPUT:
 * Hello World !
 * Namaste JavaScript
 * 8000ms Promise Resolved
 * Namaste JavaScript 2
 * 4000ms Promise Resolved !
 */

handlePromise()
