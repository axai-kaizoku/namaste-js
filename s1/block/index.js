// This is a block
// {
//   var a = 10
//   console.log(a)
// }
// this is too
// if (true) {
//   let ssd = 12;
//   console.log(ssd)
// }

// this is block scope
// {
//   var a = 10
//   let b = 20
//   const c = 30
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

// shadowing
// var a = 100;
// let a = 100;
// const a = 100;
// {
//   var a = 10
//   let b = 20
//   const c = 30
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

let a = 20
{
  let a = 10
  {
    const a = 2000
  }
}

console.log(a)

console.clear()

// setTimeout(() => console.log("1"), 100)
// setTimeout(() => console.log("2"), 0)
// const res = fetch("https://api.github.com/users/axai-kaizoku")
// res.then((d) => d.json()).then((d) => console.log(d))
// console.log("4")

console.clear()

async function fas() {
  const res = await fetch("https://api.github.com/users/axai-kaizoku")
  // console.log(res.json())
  const json = await res
  console.log(json)
}

fas()
