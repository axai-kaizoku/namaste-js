// counter but scaleable approach
// constructor function

function Counter() {
  var count = 0
  this.increment = function () {
    count++
    console.log(count)
  }
  this.decrement = function () {
    count--
    console.log(count)
  }
}

const counter1 = new Counter()

counter1.increment()
counter1.increment()

const counter1Sub = counter1.increment
counter1Sub()

const counter1SubDecrement = counter1.decrement

counter1SubDecrement()

// const counter2 = new Counter() // this will create a whole new instance of that function

// counter2.decrement()
