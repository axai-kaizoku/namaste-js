console.log("start")

// setTimeout(() => {
//   console.log("callback 2")
// }, 0)

setTimeout(function cb() {
  console.log("callback")
}, 5000)

console.log("end")

// million

let startDate = new Date().getTime()
let endDate = startDate

while (endDate < startDate + 10000) {
  endDate = new Date().getTime()
}

console.log("while expires")
