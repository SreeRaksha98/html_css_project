let buttonValue = document.createElement('button')
buttonValue.innerText = "button"
let someBullShit = document.querySelector(".main-container")
someBullShit.append(buttonValue)

buttonValue.addEventListener('click', () => {
    console.log('button clicked')

    if(someBullShit){
        buttonValue.innerText = 'button clicked'
    }
})