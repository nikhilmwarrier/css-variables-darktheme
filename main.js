document.getElementById("btn-dark").addEventListener("click", () => {
  document.documentElement.style.setProperty("--bg-color", "#333333");
  document.documentElement.style.setProperty("--txt-color", "#FFFFFF");
})

document.getElementById("btn-light").addEventListener("click", () => {
  document.documentElement.style.setProperty("--bg-color", "#FFFFFF");
  document.documentElement.style.setProperty("--txt-color", "#333333");
})