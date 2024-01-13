const num = document.querySelector(".generate")
console.log(num)

for(let i=0 ; i<=num ; i++){
    console.log(i)
}

/**
 * Variable Hoisting
 * @returns 
 */

function b() {
    return 2
}
function a() {
    return 1
}

b()



a()