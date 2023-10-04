let title = document.title
window.addEventListener("blur", () => {
    document.title = "React Js ☹️"
})
window.addEventListener("focus", () => {
    document.title = "React Js 😊"
})