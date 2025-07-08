// closures, examples of closures,
// playing with them

function outer() {
  const c = 10
  function x(b) {
    const y = () => {
      console.log(a, b, c)
    }
    const a = 10
    return y
  }
  return x
}
const fn = outer()
fn("hello world")()
