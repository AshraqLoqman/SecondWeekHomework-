// Q4
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function keysAndValues(obj){
    let ar=[],ar2=[],ar3=[]

    obj=sort(obj)

    for(const key in obj){
        ar.push(key)
        ar2.push(obj[key])
    }
    ar3.push(ar,ar2)
    return(ar3)
}

function sort(obj){

    for(const key in obj){
        for(const key2 in obj)
         {
             if(key2 > key)
             {
                 let temp=obj[key]
                 obj[key]=obj[key2]
                 obj[key2]=temp
             }
         }
     }

     return obj
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))