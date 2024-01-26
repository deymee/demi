console.log('Week2 - Javascript Arrays Examples')

var myArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']
var mixedArray = [1, 'John', true]

console.log('myArray: ', myArray)
console.log('names: ', names)
console.log('names[0]: ', names[0])
console.log(`myArray[0]: ${myArray[0]}`)
console.log('names.length: ', names.length)

//Iterating pver an Array
for (var i = 0; i < names.length; i++) {
    console.log(`names[${i}]: ${names[i]}`)
    //console.log("names")
}

console.log(typeof names)
console.log(typeof myArray)

function checkData (a, b){
    for(var i = 0; i < myArray.length; i++)
    {
        if(myArray[i] == a && names[i] == b)
        {
            console.log(mixedArray[i])
            return mixedArray[i]
        }
    }
}