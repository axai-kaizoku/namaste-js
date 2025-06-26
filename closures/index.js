// this is a closure
// function x() {
//   var a = 15

//   function y() {
//     console.log(a)
//   }
//   y()
// }

// x()

// function x() {
//   var a = 15
//   function y() {
//     console.log(a)
//   }
//   return y
// }

// var z = x()
// console.log(z)
// //.........
// z()

function z() {
  var b = 90

  function x() {
    var a = 10
    function y() {
      console.log(a, b)
    }
    y()
  }
  x()
}

z()
// const one = z()
// console.log(one)
// const two = one()
// const three = two()
// console.log(two())
