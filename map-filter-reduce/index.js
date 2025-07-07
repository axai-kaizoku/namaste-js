const arr = [2, 4, 5, 3, 6]
// console.log("@INPUT", arr)

function double(x) {
  return x * 2
}

function binary(x) {
  return x.toString(2)
}

function numPlusIndex(x, i) {
  return x + i
}

const output = arr.map(numPlusIndex)
// console.log(output)

Array.prototype.myMap = function (logic) {
  console.log("@INPUT", this)

  const output = []
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    output.push(logic(element, i, this))
  }
  return output
}

function myDouble(x) {
  return x * 2
}

const output2 = arr.myMap((x, i, whole) => x * 3 + i / whole.length)
console.log(output2)
