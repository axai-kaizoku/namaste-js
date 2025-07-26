let person = {
  firstName: "Akshay",
  lastName: "Yelle",
}

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + hometown + ", " + state,
  )
}

let printMyName = printFullName.bind(person)
printMyName("Hyderabad", "Telangana")

Function.prototype.mybind = function (...args) {
  let obj = this
  params = args.slice(1)
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]) // es6 syntax for concatinating arrays
  }
}

let printMyName2 = printFullName.mybind(person)
printMyName2("Hyderabad", "Telangana")
