let varA = document.createElement("input")
varA.setAttribute("type", "text")
varA.classList.add("first-var")
console.log(varA)

let varB = document.createElement("input")
varB.setAttribute("type", "text")
varB.classList.add("second-var")
console.log(varB)

let someRandomShit = document.querySelector(".main-container")
someRandomShit.append(varA, varB)

let varADOM = document.querySelector(".first-var")
let varBDOM = document.querySelector(".second-var")

let submitButton = document.createElement("button")
submitButton.innerText = 'submit'
submitButton.classList.add("btn-class")
submitButton.addEventListener('click', () => {
    console.log("clicked")
    let varAValue = varADOM.value
    let varBValue = varBDOM.value
    let result = document.querySelector(".result-class")
    if(!result){
        result = document.createElement("p")
        result.classList.add("result-class")
        result.innerText = "result is " + sum(varAValue, varBValue)
        someRandomShit.append(result)
    } else {
        result.innerText = "result is " + sum(varAValue, varBValue)
    }
})

someRandomShit.append(submitButton)

function sum(a, b) { 
    return parseInt(a)+parseInt(b)
}



