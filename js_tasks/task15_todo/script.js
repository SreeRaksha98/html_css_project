var mainContainerVar = document.querySelector(".main-container")

// creating add button
var btnAdd = document.getElementById('new-todo')

btnAdd.addEventListener('click', () => {

    // creating sub-container
    var subContainervar = document.createElement('div')
    subContainervar.classList.add("sub-container")

    // creating input tag 
    var inputTag = document.createElement('input')
    inputTag.name = 'input'
    inputTag.setAttribute('id', 1)
    inputTag.value = ''

    // creating submit button
    var btnSave = document.createElement('button')
    btnSave.innerHTML = 'save'
    btnSave.classList.add('btn-submit')

    // creating close button
    var btnClose = document.createElement('button')
    btnClose.classList.add('btn-close')
    btnClose.innerHTML = 'close'

    // btnSubmmit.addEventListener('click', () => {
    //     console.log('clicked')
    // })
    subContainervar.append(inputTag, btnSave, btnClose) 
    mainContainerVar.append(subContainervar)
})





