let openShopping = document.querySelector(".shopping")    // cart opening
let closeShopping = document.querySelector(".close-shopping")  // cart closing
let list = document.querySelector(".list")   // list of items
let listCard = document.querySelector(".list-card")  // listing card elements
let body = document.querySelector("body")
let total = document.querySelector(".total")
let quantity = document.querySelector(".quantity") //inside cart item quantity

// when we click on cart that time active class will be created
openShopping.addEventListener('click', ()=> {
    body.classList.add('active')
})

// add will add the class and remove will remove the class :)
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})


// array of products
let products = [
    {
        id : 1,
        name: 'prodcut 1',
        image: '1.png',
        price: 200
    },
    {
        id : 2,
        name: 'prodcut 2',
        image: '2.png',
        price: 200
    },
    {
        id : 3,
        name: 'prodcut 3',
        image: '3.png',
        price: 200
    },
    {
        id : 4,
        name: 'prodcut 4',
        image: '4.png',
        price: 200
    },
    {
        id : 5,
        name: 'prodcut 5',
        image: '5.png',
        price: 200
    },
    {
        id : 6,
        name: 'prodcut 6',
        image: '6.png',
        price: 200
    }
]

let listCards = []
function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key]
        listCards[key].quantity = 1
    }
    reloadCard()
}

function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `<img src = "/shopping_cart/images/${value.image}"/>
        <div class='title'>${value.name}</div>
        <div class='price'>${value.price}</div> 
        <button onclick = "addToCart(${key})">add to cart </button>`
        list.appendChild(newDiv)
    })
}

initApp();

// Function to add elements to the cart


function reloadCard(){
    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0
    console.log('rrrr', listCard)
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity
        
        if(value != null){
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
            <div><img src = "/shopping_cart/images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>)
                <div class = "count">${value.quantity}</div>
                <button onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>)
            </div>
            `
        }

    })
    total.innerText = totalPrice.toLocaleString()
    quantity.innerHTML 
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity + products[key].price
    }
    reloadCard()
}