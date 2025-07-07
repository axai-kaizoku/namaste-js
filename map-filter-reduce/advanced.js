const users = [
  {
    firstName: "Akshay",
    lastName: "Yelle",
    age: 23,
  },
  {
    firstName: "Monkey D.",
    lastName: "Luffy",
    age: 21,
  },
  {
    firstName: "Ichigo",
    lastName: "Kurosaki",
    age: 23,
  },
  {
    firstName: "Naruto",
    lastName: "Uzumaki",
    age: "19",
  },
]

// list of full names

const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`)

// how many users have a particular age
// {21: 1, 23: 2 ...}

const ageData = users.reduce((acc, curr) => {
  acc[curr.age] = (acc[curr.age] ?? 0) + 1
  return acc
}, {})

// first name of user who's age is > 20

// 1.
const data = users.reduce((acc, curr) => {
  if (curr.age > 20) {
    acc.push(curr.firstName)
  }
  return acc
}, [])

// 2.
const data2 = users.filter((user) => user.age > 20).map((u) => u.firstName)

console.log(data2)
