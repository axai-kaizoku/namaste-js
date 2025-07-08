// Deep about Event listeners

// Closures Demo with Event Listeners

// Scope Demo with Event listeners

// Garbage Collection & removeEventListeners

// Closures + Event Listeners

// My approach

// function counter() {
//   var count = 0
//   return function increment() {
//     // count++
//     console.log(++count)
//   }
// }

// const counter1 = counter()
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   counter1()
//   // console.log("button clicked", counter1())
// })

// Akshay's approach

// function addCounterEvent() {
//   let count = 0
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("button clicked", ++count)
//   })
// }

// addCounterEvent()

// enabling and disabling counter

let countDisplay = document.createElement("p")
countDisplay.innerText = "Count: 0"

document.body.append(countDisplay)

function addCounterEvent() {
  let count = 0

  document.getElementById("clickMe").addEventListener("click", () => {
    console.log("button clicked", ++count)
    let display = document.querySelector("p")
    display.innerText = `Count: ${count}`
  })

  document.querySelectorAll("#reset")[0].addEventListener("click", () => {
    count = 0
    let display = document.querySelector("p")
    display.innerText = `Count: ${count}`
  })
}

addCounterEvent()
