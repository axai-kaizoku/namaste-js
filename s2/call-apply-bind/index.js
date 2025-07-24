let person = {
  firstName: "Akshay",
  lastName: "Yelle",
}

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state,
  )
}

let person2 = {
  firstName: "Sanjana",
  lastName: "Myakal",
}

// person.printFullName()

// function borrowing
// person.printFullName.call(person2)

// another way is to seperate printFullname function and call it with objects
// printFullName.call(person)
// printFullName.call(person2)

// you can pass extra arguments to call like this
// the first argument is this and the following arguments are arguments to the function
printFullName.call(person, "Hyderabad", "Telangana")
// printFullName.call(person2, "Mumbai", "Maharashtra")

// in the call method we pass the arguments as comma seperated one after another,

// apply

// in the apply method we pass the all extra arguments in second argument in an array
printFullName.apply(person2, ["Mumbai", "Maharashtra"])

// bind method
// bind method is same as call, but instead of calling it binds the method with the object and returns the copy of the method
let printMyName = printFullName.bind(person, "Hyderabad", "Telangana")

console.log(printMyName)

printMyName()
