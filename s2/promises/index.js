// const cart = ["shoes", "pants", "kurta"]

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId)
// })

// const promise = createOrder(cart)

// promise.then(function (orderId) {
//   proceedToPayment(orderId)
// })

const GITHUB_API = "https://api.github.com/users/axai-kaizoku"

const user = fetch(GITHUB_API)

// user is a promise we can only access data inside the .then function not outside it.
user
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("finally called")
  })

// with this you can access data outside
async function fetchUser(url) {
  const response = await fetch(url)
  const userData = await response.json()
  return userData
}

async function main() {
  const userData = await fetchUser(GITHUB_API)
  console.log(userData)
}

main()
