const display = document.querySelector('.display')
// const a = async ()=>{
//     await setTimeout(() => {
//         display.innerHTML="ankith"
//     }, 3000);
// }
// a()
// display.innerHTML='raksha'

const validate =  (a) => {
    let result = 5;
    setTimeout(()=>{
        if (a == 2) {
            console.log(result)
            result = 3 
            console.log(result)
        } else {
            result = 1
        }
    }, 3000)
    console.log('aaa 0', result)
    return result
}
const display1 = () => {
    console.log(validate(2))
}
display1()