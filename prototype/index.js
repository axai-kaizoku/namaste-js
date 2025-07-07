let arr = ["Akshay", "Aditya"]

let obj = {
  name: "Akshay",
  city: "Hyderabad",
  getInfo: function () {
    console.log(this.name + " lives in " + this.city)
  },
}

let obj2 = {
  name: "Aditya",
}

// Never do this
obj2.__proto__ = obj

function fun() {
  //
}

// In functions

Function.prototype.mybind = function () {
  console.log("custom function")
}

// fun.__proto__.mybind()

fun.mybind()
