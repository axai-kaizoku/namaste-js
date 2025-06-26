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
