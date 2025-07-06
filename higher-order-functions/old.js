const array = [3, 2, 1, 4]

const calculateArea = function (arr) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(Math.PI * arr[i] * arr[i])
  }
  return output
}

const calculateCircumference = function (arr) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * Math.PI * arr[i])
  }
  return output
}

const calculateDiameter = function (arr) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(2 * arr[i])
  }
  return output
}

console.log(calculateArea(array))
console.log(calculateCircumference(array))
console.log(calculateDiameter(array))
