const API = "https://api.github.com/users/axai-kaizoku"

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
