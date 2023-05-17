// creating two diff arrays
var fruitsArray = ['Belt', 'Brown Leather Belt', 'Brown wallet', 'Leather Wallet', 'Watch']
var imageArray = ['images/belt.jpg', 'images/brown_belt.jpg', 'images/brown_wallet.jpg', 'images/leather_wallet.jpg', 'images/watch.jpg']
var fruitLink = ['https://en.wikipedia.org/wiki/Apple', 
'https://en.wikipedia.org/wiki/Banana', 
'https://en.wikipedia.org/wiki/orange', 
'https://en.wikipedia.org/wiki/Grape', 
'https://en.wikipedia.org/wiki/lemon']
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
    image.src = '/RCart/men_accessories/' + imageArray[index] 
        
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