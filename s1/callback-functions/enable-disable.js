function addEnableDisableEvent() {
  let enabled = true
  const toggleBtn = document.getElementById("enable")
  const clickMeBtn = document.getElementById("clickMe")

  toggleBtn.addEventListener("click", () => {
    enabled = !enabled
    if (enabled) {
      toggleBtn.innerText = "Disable"
      clickMeBtn.disabled = false
    } else {
      toggleBtn.innerText = "Enable"
      clickMeBtn.disabled = true
    }
  })
}

addEnableDisableEvent()
