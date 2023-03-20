let errorMessage=document.getElementById('error')
function purchase(){
    errorMessage.textContent = "Something went wrong, please try gain later"
    errorMessage.className = 'error show'
    console.log('button clicked')
}