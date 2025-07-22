// "use strict"

// this in global space

console.log(this) // globalObject

// this inside a function

function x() {
  console.log(this)
}

// x()

// this in strict mode - (this substitution)

// this value depends on how this is called (window)

// window.x()

// this inside a object's method

const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name)
  },
}

student.printName()

const student2 = {
  name: "Sanjana",
}

// call apply bind methods (sharing methods)

student.printName.call(student2) // value of this = student2

// this inside arrow function

const obj = {
  a: 20,
  x: () => {
    console.log(this)
  },
}

obj.x()

// this inside nested arrow function

const obj2 = {
  a: 30,
  x: function () {
    // console.log(this)
    const y = () => {
      console.log(this)
    }
    y()
  },
}

obj2.x()

// this inside DOM
