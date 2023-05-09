// creating two diff arrays
var fruitsArray = ['Angel Fish', 'Japanese Sea Bash Fish', 'Prawns', 'Catla Fish', 'White Prawns', 'Chicken Leg Piece', 'Boneless Chicken', 'Mutton']
var imageArray = ['images/angel_fish.jpg', 'images/japanese_sea_bass_fish.jpg', 'images/prawns.jpg', 'images/catla_fish.jpg', 'images/white_prawns.jpg', 'images/chiken_leg_piece.jpg','images/boneless_chicken.jpg', 'images/Mutton.jpg']
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
    image.src = '/RCart/meat/' + imageArray[index] 
        
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