const arr = [2, 4, 5, 1, 7]

function findSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}

// console.log(findSum(arr))

const output = arr.reduce((acc, curr) => {
  acc = acc + curr
  return acc
}, 0)

// console.log(output)

function findMax(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

console.log(findMax(arr))

const output2 = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr
  }
  return acc
}, 0)

console.log(output2)
