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
            if(!localStorage.getItem(TODO_LOCALSTORAGE_KEY)){
                localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify([inputTag.value]))
            }
            else{
                var todoList = JSON.parse(localStorage.getItem(TODO_LOCALSTORAGE_KEY))
                localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(todoList.concat(inputTag.value)))   
            }
            document.getElementById('todo-add-container').remove()   //To close sub conatiner after saving  
            displayContent()
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
    todoDom.innerHTML = savedData[index]   // or you can use element instead of savedData[index]
    todoListDisplay.append(todoDom)
});
}

displayContent()


