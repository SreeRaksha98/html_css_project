// exercise #1
console.log('========================excersie #1')
const isEqualToHundread = (a, b) => {
    ((a + b === 100) || (a === 100) || (b === 100)) ? console.log('true') : console.log('false')
}
isEqualToHundread(50, 50)

// exercise #2
console.log('========================excersie #2')
const findExtensstion = (str1) => {
    return str1.slice(str1.lastIndexOf('.'))
}
console.log(findExtensstion('index.html.mp4'))

// exercise #3
console.log('========================excersie #3')
const replaceCharacter = (str2) => {
    return (
        str2.split('').
            map(char => String.fromCharCode(char.charCodeAt(0) + 1)).
            join('')
    )
}
console.log(replaceCharacter('raksha'))

// exercise #4
console.log('========================excersie #4')
arr1 = [
    { name: 'raksha', price: 100 },
    { name: 'ankithaaa', price: 7 },
    { name: 'rakshaa', price: 20 },
    { name: 'ankithaaaaa', price: 40 },
    { name: 'ankith', price: 110 },
]
const filterArrayMethod = arr1.filter((item) => {
    return item.price >= 100
})
console.log(filterArrayMethod)

// exercise #5
console.log('========================excersie #5')
arr2 = ['raksha', 'ankith', 'praga', 'sreeeee', 'ank']
const filterArrayName = arr2.filter((item) => {
    return (
        item.length > 5
    )
})
console.log(filterArrayName)

// exercise #6 square of array element using map
console.log('========================excersie #6')
const arr3 = [2, 4, 6, 8]
let mapFunc = arr3.map((item) => {
    return item * item
})
console.log(mapFunc)

// exercise #7 square of array element using foreach
console.log('========================excersie #7')
const arr4 = [2, 4, 6, 8]
let usingForEach = arr4.forEach((item) => console.log(item * item))

// exercise #8 
console.log('========================excersie #8')
const dateConvertore = () => {
    let dateFromLib = new Date()
    let days = dateFromLib.getDate()
    let months = dateFromLib.getMonth()
    let years = dateFromLib.getFullYear()
    return `${ days } / ${months} / ${ years }`
}
console.log(dateConvertore())

// exercise #9 
console.log('========================excersie #9')
const addingNew = (str3) => 
   str3.indexOf('New!') === 0 ? str3 : `New! ${str3}`

console.log(addingNew('New! raksha'))

// exercise #10 
console.log('========================excersie #10')
const makeNewString = (str4) => str4.length > 3  ? str4.slice(0, 3) + str4.slice(-3) : console.log(`${str4}`)
console.log(makeNewString('raksharamesh'))

// exercise #11 program to extract the first half of the string
console.log('========================excersie #11')
const fistHalfOfString = (str5) => str5.slice(0,(str5.length / 2))
console.log(fistHalfOfString('ankith'))
console.log(fistHalfOfString('ankitha'))
console.log(fistHalfOfString('ankithaa'))

// exercise #12
console.log('========================excersie #12')
const stringConcat = (str6, str7) => {
    return `${str6.slice(1)}` + `${str7.slice(1)}`
}
console.log(stringConcat('abcd', 'efgh' ))

// exercise #13
console.log('========================excersie #13')
arr5 = [1, 2, 3, 4, 5, 6]
arr5.forEach(element => {
    element % 2 === 0 ? console.log(element) : ''
});

const evenNumber = (arrOfNum) => 
    arrOfNum.filter( (num) => num%2===0 ).length
console.log(evenNumber([1, 2, 3, 4, 5, 6]))


