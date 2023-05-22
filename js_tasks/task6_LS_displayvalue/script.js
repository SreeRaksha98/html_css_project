let inputValue = document.querySelector(".input-class")
// inputValue.innerHTML

let buttonClick = document.querySelector(".enter-btn")
buttonClick.addEventListener('click', () => {
    if(inputValue.value){
        console.log(inputValue.value)
        console.log('button clicked with value') 
    }
    else{
        console.log('button clicked without value')
    }
})


