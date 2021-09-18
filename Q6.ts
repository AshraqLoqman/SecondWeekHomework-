// Q6
// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0

function numOfSubbarrays(obj){
    let num=0;
    for(const key in obj)
    {
        if(Array.isArray(obj[key]))
            num++
    }
    return num
}

console.log(numOfSubbarrays( [[1, 2, 3]] ))
console.log(numOfSubbarrays( [[1, 2, 3], [1, 2, 3], [1, 2, 3]] ))
console.log(numOfSubbarrays( [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]] ))
console.log(numOfSubbarrays( [1, 2, 3] ))