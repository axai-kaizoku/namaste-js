console.log("index.js loaded")

const scriptsToLoad = {
  first: "first.js",
  second: "second.js",
  three: "three.js",
  four: "four.js",
}

function loadScripts(selectedIds) {
  // Remove previously loaded dynamic scripts
  document.querySelectorAll(".dynamic-script").forEach((el) => el.remove())

  // Load scripts for the selected checkboxes
  selectedIds.forEach((id) => {
    if (scriptsToLoad[id]) {
      const script = document.createElement("script")
      script.src = scriptsToLoad[id]
      script.className = "dynamic-script"
      document.body.appendChild(script)
    }
  })
}

function updateCheckboxesAndLoadScriptsFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  const selectedIds = []

  // Update checkboxes based on URL params
  Object.keys(scriptsToLoad).forEach((id) => {
    const checkbox = document.getElementById(id)
    if (checkbox) {
      const shouldBeChecked = urlParams.get(id) === "true"
      checkbox.checked = shouldBeChecked
      if (shouldBeChecked) {
        selectedIds.push(id)
      }
    }
  })

  // Load the corresponding scripts
  loadScripts(selectedIds)
}

// Listen for form submission to update the URL
document.getElementById("scriptForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const selectedIds = []
  const newParams = new URLSearchParams()

  Object.keys(scriptsToLoad).forEach((id) => {
    const checkbox = document.getElementById(id)
    if (checkbox && checkbox.checked) {
      selectedIds.push(id)
      newParams.set(id, "true")
    }
  })

  // Create the new URL and update the browser history
  const newUrl = `${window.location.pathname}?${newParams.toString()}`
  history.pushState({ path: newUrl }, "", newUrl)

  // Load the scripts
  loadScripts(selectedIds)
})

// Handle back/forward browser navigation
window.addEventListener("popstate", function (e) {
  updateCheckboxesAndLoadScriptsFromURL()
})

// Initial page load: read URL and set state
document.addEventListener("DOMContentLoaded", function () {
  updateCheckboxesAndLoadScriptsFromURL()
})
