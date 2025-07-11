## Promises

- [x] What is promise?

  - A promise is an object which represents the eventual completion (or failure) of an asynchronous operation.

- [x] Importance of promise and Advantages.

  # Importance

  - Promise is a special object, which helps in managing asynchronous operations
  - Simplifies asynchronous code, makes it cleaner, and maintainable than using callbacks

  # Advantages

  - Avoids callback hell and inversion of control
  - Better error handling
  - Chaining
  - Integration with async/await

## fetch

- If you want to use fetch in synchronously

```
user
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("finally called")
  })
```

- If you want to use fetch asynchronously.

```
async function fetchUser(url) {
  const response = await fetch(url)
  const userData = await response.json()
  return userData
}

async function main() {
  const userData = await fetchUser(GITHUB_API)
  console.log(userData)
}

main()

```

# Promises and fetch

| Concept                | Explanation                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Promise immutability   | Once resolved/rejected, state can’t change, but **resolved values are accessible** |
| `await` inside `async` | Waits until the Promise resolves, **lets you assign the value**                    |
| `.then()`              | Also works, but you need to **use the value inside the chain**                     |
| "Can't access outside" | Only true in synchronous scope — the promise hasn’t resolved yet!                  |
| Best practice          | Wrap logic inside an `async` function or `.then()` block to access values          |
