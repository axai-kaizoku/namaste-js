/**
 * What is async?
 * What is await?
 * How async and await works behind the scenes?
 * Examples of using async/await
 * Error handling
 * Interviews
 * Async await vs Promise.then/.catch
 *
 */

// async function getData() {
//   return "Namaste"
// }

// getData().then(d => console.log(d))

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved")
})

// before async/await
function getData() {
  p.then((res) => console.log(res))
}
getData()

// after async/await
async function handleAsync() {
  const val = await p
  console.log(val)
}
handleAsync()
