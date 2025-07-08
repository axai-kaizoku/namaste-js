// normal function

function a() {
  console.log("a")
}

a()
console.log("End")

// using setTimeout
console.log("start")

setTimeout(function cb() {
  console.log("callback")
}, 4000)

console.log("end")

// using click event
console.log("start")

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback")
})

console.log("end")

// using fetch()

console.log("start")

setTimeout(function cbT() {
  console.log("CB setTimeout")
}, 5000)

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function cbF() {
  console.log("CB Api")
})

console.log("end")
