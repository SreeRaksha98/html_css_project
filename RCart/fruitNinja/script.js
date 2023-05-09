// creating two diff arrays
var fruitsArray = ['apple', 'banana', 'orange', 'black_grapes', 'lemon', 'mango', 'papaya', 'pineapple', 'watermelon']
var imageArray = ['images/apple.jpg', 'images/banana.jpg', 'images/orange.jpg', 'images/black_grapes.jpg', 'images/lemon.jpg', 'images/mango.jpg', 'images/papaya.jpg', 'images/pineapple.jpg', 'images/watermelon.jpg']
var fruitLink = ['https://en.wikipedia.org/wiki/Apple', 
'https://en.wikipedia.org/wiki/Banana', 
'https://en.wikipedia.org/wiki/orange', 
'https://en.wikipedia.org/wiki/Grape', 
'https://en.wikipedia.org/wiki/lemon', 
'https://en.wikipedia.org/wiki/mango', 
'https://en.wikipedia.org/wiki/papaya', 
'https://en.wikipedia.org/wiki/pineapple', 
'https://en.wikipedia.org/wiki/watermelon']
// var specialFruits = []

// creating containers
var mainContainer = document.querySelector(".main-container")
var subContainer = document.createElement('div')
subContainer.classList.add("sub-container")

fruitsArray.forEach((fruit, index) => {
    var fruitItem = document.createElement("div")
    fruitItem.classList.add('fruit-item')

    var image = document.createElement('img')
    image.classList.add("image-class")
    image.src = '/RCart/fruitNinja/' + imageArray[index] 
        
    // creating buttons, input tag and a tag
    var anchorTag = document.createElement('a')
    anchorTag.classList.add("anchor")
    anchorTag.innerText = fruit
    anchorTag.href = fruitLink[index]
    var cartAction = document.createElement("div")
    cartAction.classList.add('cart-action')
    
    var inputTag = document.createElement('input')
    inputTag.type = 'number'
    inputTag.classList.add('input-tag')
    
    var addToKart = document.createElement('button')
    addToKart.classList.add('kart-btn')
    addToKart.innerText = 'Add to Kart'
    cartAction.append(inputTag, addToKart)
    fruitItem.append(image, anchorTag, cartAction)
    subContainer.append(fruitItem)

    // var specialPrice = document.createElement('div')
    // specialPrice.classList.add('special-price')
    // specialPrice.innerText = 
})

// appending value to display
mainContainer.append(subContainer)