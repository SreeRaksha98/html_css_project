var mainContainerVar = document.querySelector(".main-container")
var subContainervar = document.createElement('div')
subContainervar.classList.add("sub-container")
var inputTag = document.createElement('input')
var btnSubmmit = document.createElement('button')
btnSubmmit.innerHTML = 'submit'
btnSubmmit.classList.add('btn-submit')
var btnClose = document.createElement('button')
btnClose.classList.add('btn-close')
btnClose.innerHTML = 'close'

document.addEventListener('click', () => {
    inputTag.name = 'input'
    inputTag.setAttribute('id', 1)
    inputTag.value = ''
    btnSubmmit.addEventListener('click', () => {
        console.log('clicked')
    })
    subContainervar.append(inputTag, btnSubmmit, btnClose) 
    mainContainerVar.append(subContainervar)
})



