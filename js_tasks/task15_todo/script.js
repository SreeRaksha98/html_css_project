var mainContainerVar = document.querySelector(".main-container")
const TODO_LOCALSTORAGE_KEY = 'todo-id'    //key created to access local storage data (local storage key value pair)
// creating add button
var btnAdd = document.getElementById('new-todo')

// Adding new notes 
btnAdd.addEventListener('click', () => {
    if(!document.getElementById('todo-add-container')){   
        // creating sub-container
        var subContainervar = document.createElement('div')
        subContainervar.classList.add("sub-container")
        subContainervar.id = 'todo-add-container'    //important step

        // creating input tag 
        var inputTag = document.createElement('input')
        inputTag.name = 'input'
        inputTag.setAttribute('id', 1)
        inputTag.classList.add("input-tag")

        //creating containers for button
        var buttonContainer = document.createElement('div')
        buttonContainer.classList.add("button-container")

        // creating submit button
        var btnSave = document.createElement('button')
        btnSave.innerHTML = 'save'
        btnSave.classList.add('btn-submit')

        btnSave.addEventListener('click', () => {
            if(inputTag.value.length > 0){
                if(!localStorage.getItem(TODO_LOCALSTORAGE_KEY)){
                    localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify([inputTag.value]))
                }
                else{
                    var todoList = JSON.parse(localStorage.getItem(TODO_LOCALSTORAGE_KEY))
                    localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(todoList.concat(inputTag.value)))   
                }
                document.getElementById('todo-add-container').remove()   //To close sub conatiner after saving  
                displayContent()
            }
        })

        // creating close button
        var btnClose = document.createElement('button')
        btnClose.classList.add('btn-close')
        btnClose.innerHTML = 'close'
        btnClose.addEventListener('click', () => {
            document.getElementById('todo-add-container').remove()
        })
        buttonContainer.append(btnSave, btnClose)
        subContainervar.append(inputTag, buttonContainer) 
        mainContainerVar.append(subContainervar)
    }
})

var backgroundArray = ['purple-bg', 'light-green-bg', 'pink-bg', 'cream-bg', 'sky-blue-bg']

function displayContent (){
    var todoListDisplay = document.querySelector(".todo-list-display")
    todoListDisplay.innerHTML = ""

    //will return the value of local storage
    savedData = JSON.parse(localStorage.getItem(TODO_LOCALSTORAGE_KEY))
    console.log(savedData)

    //? is to check if there is data present in savedData or not (substitution of if statement)
    savedData?.forEach((element, index) => {
    //sub container for displaying data
    todoDom = document.createElement('div')
    todoDom.classList.add('todo-item')

    //setting background for the notes
    var backgroungIndex = index % backgroundArray.length 
    todoDom.classList.add(backgroundArray[backgroungIndex]) // to give unique identification to the div's / sub-container

    var todoListDisplayContainer = document.createElement('div')
    todoListDisplayContainer.classList.add('todo-list-display-container')
    todoListDisplayContainer.innerHTML = savedData[index]        // or you can use element instead of savedData[index]
    
    // Delete button
    deleteBtn = document.createElement('button')
    deleteBtn.classList.add('dete-button')
    deleteBtn.innerHTML = '<p> Done </p>'
    deleteBtn.setAttribute('data-todo-index', index)

    
    deleteBtn.addEventListener('click', (event) => {
        console.log(savedData, event.target.getAttribute('data-todo-index'))
        var todoToBeRemovedIndex = parseInt(event.target.getAttribute('data-todo-index'))
        savedData = removeElementByIndex(savedData, todoToBeRemovedIndex)
        localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(savedData))
        displayContent()
    })

    todoDom.append(todoListDisplayContainer, deleteBtn)
    todoListDisplay.append(todoDom)

});
}

// remove the completed task
function removeElementByIndex(arr, index) {
    arr.splice(index, 1)
    return arr
}

displayContent()


