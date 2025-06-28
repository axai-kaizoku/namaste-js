// relation between closures and garbage collectors
console.log("first")
function a() {
  var x = 0
  var z = 0
  function b() {
    console.log(x)
  }
  return b
}

const y = a()

// ...
// here we can't free the memory of x because fn "y" can be called anywhere

y()
