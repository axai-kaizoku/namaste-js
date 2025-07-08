const array = [3, 2, 1, 4]

const area = function (radius) {
  return Math.PI * radius * radius
}
const circumference = function (radius) {
  return 2 * Math.PI * radius
}
const diameter = function (radius) {
  return 2 * radius
}

// const calculate = function (arr, logic) {
//   const output = []
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]))
//   }
//   return output
// }

Array.prototype.calculate = function (logic) {
  const output = []
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]))
  }
  return output
}

console.log(array.calculate(area))

console.log(array.map(area))
// console.log(array.map(circumference))

// console.log(calculate(array, area))
// console.log(calculate(array, circumference))
// console.log(calculate(array, diameter))
