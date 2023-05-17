// creating two diff arrays
var fruitsArray = ['Jeans Pant', 'Joggers', 'Jogging Pants', 'Sweat shirt', 'White Joggers']
var imageArray = ['images/jeans_pant.jpg', 'images/joggers.jpg', 'images/jogging_pants.jpg', 'images/sweat_shirt.jpg', 'images/white_joggers.jpg']
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
    image.src = '/RCart/men_attire/' + imageArray[index] 
        
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