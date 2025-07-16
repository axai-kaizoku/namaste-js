const API = "https://api7.github.com/users/axai-kaizoku"

// async function handlePromise() {
//   const res = await fetch(API)
//   const data = await res.json()
//   console.log(data)
// }

async function handlePromise() {
  try {
    const res = await fetch(API)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

handlePromise()

/**
 * if you want to get data from fetch and .then use this
 */

let data

function getData(data) {
  console.log(data)
}

fetch(API)
  .then((res) => res.json())
  .then((res) => {
    // console.log(data)
    // getData(res)
    data = res
  })

setTimeout(() => {
  console.log(data)
}, 2000)
// getData()
