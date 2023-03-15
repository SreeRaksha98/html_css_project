let countEl = document.getElementById("count")
let saveEl = document.getElementById("save")
let count = 0

console.log(saveEl)

function increment() {
    count = count + 1
    countEl.innerText = count
}
function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}