const cart = ["shoes", "pants", "kurta"]
const cart2 = []

// const promise = createOrder(cart2)
// console.log(promise)

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId)
    return orderId
  })
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  .then((paymentInfo) => {
    // console.log(paymentInfo)
    return showOrderSummary(paymentInfo)
  })
  .then((orderInfo) => updateBalance())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err.message)
  })
  .finally(() => console.log("No matter what, I will execute"))

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // validate cart
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid")
      reject(error)
    }

    const orderId = generateOrderId(cart)

    if (orderId) {
      const time = Math.random() * 100 + 2000
      setTimeout(() => {
        resolve(orderId)
      }, time)
    }
  })

  return pr
}

function validateCart(cart) {
  if (cart.length) {
    return true
  }
  return false
}

function generateOrderId(cart) {
  return new Date().getTime()
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    const isValid = new Date().getTime() - orderId > 2050
    if (isValid) {
      const data = { message: "Payment successfull", orderId }
      resolve(data)
    }

    reject(new Error("Payment failed"))
  })
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve, reject) => {
    if (paymentInfo) {
      resolve("Order created " + paymentInfo.orderId)
    }
    reject(new Error("Failed to retrieve order summary"))
  })
}

function updateBalance() {
  return new Promise((resolve, reject) => {
    resolve("Balance udpated !")
  })
}
