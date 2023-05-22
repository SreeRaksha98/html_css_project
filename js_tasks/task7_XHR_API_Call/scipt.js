document.querySelector('.api-call').addEventListener('click', ()=> {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.response)
       console.log('JSON converted data', JSON.parse(xhttp.response))
       document.querySelector('.xhr-sample').innerHTML= xhttp.response
    }
};
xhttp.open("GET", "https://fakestoreapi.com/products", true);
xhttp.send()})