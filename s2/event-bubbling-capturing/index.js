let grandParent = document.querySelector("#grandparent")
let parent = document.querySelector("#parent")
let child = document.querySelector("#child")

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("grandParent clicked")
  },
  true,
) // capturing

parent.addEventListener(
  "click",
  (e) => {
    console.log("parent clicked")
  },
  false,
) // bubbling

child.addEventListener(
  "click",
  (e) => {
    console.log("child clicked")
    e.stopPropagation() // Stops the event from bubbling up to parent elements
    // e.stopImmediatePropagation() // Stops all other listeners on the same element
  },
  false,
) // bubbling

child.addEventListener(
  "click",
  (e) => {
    console.log("child clicked 2")
  },
  true,
) // capturing
