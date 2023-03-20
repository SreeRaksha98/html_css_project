let num1 = 4
let num2 = 8

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let total = document.getElementById("total-el")

function add(){
    let result = num1 + num2
    total.textContent = "sum : " + result
}

function sub(){
    let result = num1 - num2
    total.textContent = "sub : " + result
}

function mul(){
    let result = num1 * num2
    total.textContent = "mul : " + result
}

function div(){
    let result = num1 / num2
    total.textContent = "div : " + result
}