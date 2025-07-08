// console.log("namaste")

// setTimeout(() => {
//   console.log("javascript")
// }, 5000)

// console.log("season 2")

const cart = ["shoes", "pants", "kurta"]

// callback hell
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet()
    })
  })
})
