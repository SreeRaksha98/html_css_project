var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // console.log('responseConverted', )
        /**
         * Step 1 Splitdown
         */
        const products = JSON.parse(this.response)
        /**
         * Top Down Uproach to make it chunk we have a process of making a big cake into small piece
         */
        products.forEach(product => {
            /**
             * Making Use of the information we have to our convience
             */
                createProductDOM(product.id, product.title, product.description, product.image, product.price)
        });
    }
};
xhttp.open("GET", "https://fakestoreapi.com/products", true);
xhttp.send();

function createProductDOM (id, name, description, img, price, rawData = {}){
    var prodName = document.createElement('div')
    prodName.innerText = name

    var prodDescription = document.createElement('div')
    prodDescription.innerText = description

    var prodImg = document.createElement('img')
    prodImg.src = img
    prodImg.alt = name

    var prodPrice = document.createElement('div')
    prodPrice.innerText = price

    var subContainer = document.createElement('div')
    subContainer.classList.add('sub-container')

    subContainer.append(prodName, prodDescription, prodImg, prodPrice)

    var mainContainer = document.querySelector(".main-container")
    mainContainer.append(subContainer)
}