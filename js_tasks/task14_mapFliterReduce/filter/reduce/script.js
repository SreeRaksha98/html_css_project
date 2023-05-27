var num = [2, 4, 6, 2, 1, 4, 5]

var filteredValue = num.filter( n => n%2 === 0)
console.log('Filtered value is : ' + filteredValue)

var mappedValue = num.map( n => n*2)
console.log('Map Function : ' + mappedValue)

var reducedValue = num.reduce( (a, b) => a+b)
console.log('Reduce : ' + reducedValue)


