let buttons = document.querySelectorAll(".inputs button")
let displayAnswer = document.querySelector(".display_answer input")

const handleButtonIterate = (buttonElement) => {
    /* everything which has to be operated for indiviual button */
    if(buttonElement){
        buttonElement.addEventListener('click', 
        (event) => {
            let value = event.target.value
            switch (value) {
                case '=' : displayAnswer.value = eval(displayAnswer.value)
                break
                case 'AC' : displayAnswer.value = ''
                break
                case 'DEL' : displayAnswer.value = displayAnswer.value.slice(0, -1)
                break
                default :
                displayAnswer.value += value
            }

        })
    }
} 


buttons.forEach(handleButtonIterate)


