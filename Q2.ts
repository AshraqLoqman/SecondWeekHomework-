// Q2
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples

// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(drinks){
    
    for(let i=0 ; i<drinks.length ; i++)
     {
         for(let j=i ; j<drinks.length ; j++)
         {
             if(drinks[j].price<drinks[i].price)
             {
                 let temp=drinks[i]
                 drinks[i]=drinks[j]
                 drinks[j]=temp
             }
         }
     }
     return drinks
}

let drinks = [{name: "lemonade", price: 50},{name: "lime", price: 10}]
console.log(sortDrinkByPrice(drinks))