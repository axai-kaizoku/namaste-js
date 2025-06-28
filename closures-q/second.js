// data-hiding (encapsulation) with closures

function counter() {
  var count = 0
  function incrementCounter() {
    count++
    console.log(count)
  }
  return incrementCounter
}

// console.log(counter.count) // undefined (we can't access the count variable)

const counter1 = counter()
counter1()
counter1()

// const counter2 = counter() // this will create a whole new instance of that function
// counter2()
// counter2()
// counter2()
// counter2()
// counter2()
