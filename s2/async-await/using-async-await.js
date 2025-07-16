/**
 * Example 3
 */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("4000ms Promise Resolved ")
  }, 4000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("8000ms Promise Resolved !")
  }, 8000)
})

async function handlePromise() {
  console.log("Hello World !")
  /**
   * Here, p1 has a shorter timeout (4000ms), so it will resolve more quickly. After that, p2 with its longer timeout (8000ms) will resolve after its specified time.
   *
   */

  /**
   * Basically at any await statement, it looks like JS Engine is waiting in that line, but it's not.
   * (If JS is waiting it will freeze the browser, but here in this condition, it's not, Soo, what's happening here?)
   *
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
 * Namaste JavaScript -> printed after 4 secs
 * 4000ms Promise Resolved
 * Namaste JavaScript 2 -> printed after 8 secs
 * 8000ms Promise Resolved !
 */

handlePromise()
