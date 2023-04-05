const searchBox = document.querySelector("#search-item")
searchBox.addEventListener("keypress", (event) => {
    if(event.key == 'Enter'){
        refreshProduct()
    }
})

searchBox.addEventListener("change", (event) => {
        refreshProduct()
    }
)

let refreshProduct = () => { const products = document.querySelectorAll(".product")
products.forEach(product => {
    if(product.innerHTML.toLowerCase().includes(searchBox.value.toLowerCase())){
        product.style.display = 'flex'
    }
    else{
        product.style.display = 'none'
    }
})}