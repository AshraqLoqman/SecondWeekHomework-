// Q3
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj){
    let ar=[]
    for(const key in obj){
        ar.push([key,obj[key]])
    }
    return(ar)
    
    // return(Object.entries(obj))
}

console.log(toArray({ a: 1, b: 2 }))
