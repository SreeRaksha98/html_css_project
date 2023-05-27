var mainContainerVar = document.querySelector(".main-container")

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

        // creating submit button
        var btnSave = document.createElement('button')
        btnSave.innerHTML = 'save'
        btnSave.classList.add('btn-submit')

        btnSave.addEventListener('click', () => {
            if(!localStorage.getItem('todo-id')){
                localStorage.setItem('todo-id', JSON.stringify([inputTag.value]))
            }
            else{
                var todoList = localStorage.getItem('todo-id')
                // console.log(todoList, JSON.parse(todoList))
                localStorage.setItem('todo-id', JSON.stringify(todoList.concat(inputTag.value)))   
            }  
        })

        // creating close button
        var btnClose = document.createElement('button')
        btnClose.classList.add('btn-close')
        btnClose.innerHTML = 'close'
        btnClose.addEventListener('click', () => {
            document.getElementById('todo-add-container').remove()
        })

        subContainervar.append(inputTag, btnSave, btnClose) 
        mainContainerVar.append(subContainervar)
    }
})





