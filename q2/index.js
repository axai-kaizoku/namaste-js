console.log("A")

const div = document.createElement("div")
const observer = new MutationObserver(() => {
  console.log("B")
  Promise.resolve().then(() => console.log("C"))
  setTimeout(() => console.log("D"), 0)
})
observer.observe(div, { attributes: true })

setTimeout(() => {
  console.log("E")
  Promise.resolve().then(() => console.log("F"))
  requestAnimationFrame(() => console.log("G"))
}, 0)

Promise.resolve().then(() => {
  console.log("H")
  setTimeout(() => {
    console.log("I")
    Promise.resolve().then(() => console.log("J"))
  }, 0)
})

div.setAttribute("id", "test")

requestAnimationFrame(() => console.log("K"))
