let buttonValue = document.createElement('button')
let someBullShit = document.querySelector(".main-container")
someBullShit.append(buttonValue)

buttonValue.addEventListener('click', () => {
    console.log('button clicked')
    buttonValue.classList.add('active')

    if(someBullShit){
        buttonValue.innerText = 'button clicked'
    }
})

buttonValue.addEventListener("mouseout", (event) => {
    buttonValue.classList.remove('active')
});