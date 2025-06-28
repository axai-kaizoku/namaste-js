// a() -> function call
// b() -> undefined

// Function Statement or Function Declaration
function a() {
  console.log("a called")
}

// Function Expression
var b = function () {
  console.log("b called")
}

// Anonymous Function
// a function without a name
// function () {
// } // -> but you can't use this syntax
var c = function () {} //
// -> this can be used

// Named Function Expression
var d = function abc() {
  console.log(abc)
}
// abc() -> error

// Difference between Parameters & Arguments
function diff(param1, param2) {
  console.log(param1, param2)
}
// diff(1, 2)
// -> values which we give to a function call are arguments
// -> values which will receive to a function are parameters

// First Class Functions - First Class Citizens
// ability to use functions as values
const cFn = function (param1) {
  return function abc() {}
}

cFn(function xyz() {})
console.log(cFn())

// -> we can pass functions are arguments to another functions
// -> we can return a function from a function

// Arrow Functions
