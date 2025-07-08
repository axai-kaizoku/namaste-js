var a = 100

function x() {
  var a = 10

  function y() {
    if (a === 10) {
      a = 40
    }
    console.log(a)
  }
  y()
}
x()

// let value = 10

// function outer() {
//   console.log("1: ", value) // undefined
//   var value = 20

//   function inner() {
//     console.log("2: ", value) // error
//     let value = 30
//     console.log("3: ", value) // 30
//   }
//   try {
//     inner()
//   } catch (e) {
//     console.log("4: ", e.message) // 30
//   }

//   console.log("5: ", value) // 20
// }

// outer()

// console.log("6: ", value) // 10
