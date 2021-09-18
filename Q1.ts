// Q1
// Create a function that returns an array of strings sorted by length in ascending order.

// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
// sortByLength([]) ➞ []

function sortByLength(ar){
    let lenAr=len(ar)       //// return array of length
    return(sort(ar,lenAr))
}

function len(ar){
    let ar2=[]
    for(let i=0;i<ar.length;i++){
        let len=0
        for(let j = 0; j < ar[i].length; j++)
            len++
        ar2.push(len)
    }
    return ar2
}

function sort(ar,lenAr){
    for(let i=0 ; i<lenAr.length ; i++)
     {
         for(let j=i ; j<lenAr.length ; j++)
         {
             if(lenAr[j]<lenAr[i])
             {
                 let temp=ar[i]
                 ar[i]=ar[j]
                 ar[j]=temp
             }
         }
     }
     return ar
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]))
console.log(sortByLength(["apple", "pie", "shortcake"]))
console.log(sortByLength(["may", "april", "september", "august"]))
console.log(sortByLength([]))