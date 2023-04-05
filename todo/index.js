let elementToBeFetched = document.querySelector(".input-class")
let fetchedValue = elementToBeFetched.value

let clickSubmit = document.querySelector("#btn-submit")

clickSubmit.addEventListener("click",() => {
    console.log("click madbitte")
    let fetchedValue = elementToBeFetched.value
    console.log("fetchedValue")
    let newElement = document.createElement('div')
    let todoContainer = document.querySelector(".list-container")
    let numberOfTodosWhichExists = todoContainer.childNodes.length
    newElement.innerText = fetchedValue 
    newElement.id = 'todo-item-' + numberOfTodosWhichExists
    todoContainer.appendChild(newElement)
})


