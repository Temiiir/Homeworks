var tags =   ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br' ]
var result = {}
for(var tag of tags){
    if(result[tag] === undefined){
        result[tag] = 1
    }else {
        result[tag]++
    }
}
console.log(result)


var array = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76]
var array2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54]
var newArray = []
for (var i = 0; i < array.length; i++) {
    if (array2.includes(array[i])) {
        newArray.push(array[i])
    }
}
console.log(newArray)