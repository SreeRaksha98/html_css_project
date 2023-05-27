let newObject = {
    name: "Raksha",
    age: 25
};

localStorage.setItem("newObject", JSON.stringify(newObject));
console.log(localStorage);

var myLocalParse = JSON.parse(localStorage.getItem(newObject))
console.log(myLocalParse)