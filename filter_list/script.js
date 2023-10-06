// const list = ['apple', 'mango', 'banana', 'pineapple']

const inputTag = document.querySelector(".input-tag")
const list = document.querySelectorAll(".list li")

if(inputTag && list){
    inputTag.addEventListener('change', () => {
        const filteredValue = inputTag.value.toLowerCase()

        list.forEach((item)=>{
            text = item.innerHTML.toLowerCase()
            item.style.display = text.includes(filteredValue) ? 'block' : 'none'
            console.log( filteredValue, item.innerHTML)
        })
    })

}