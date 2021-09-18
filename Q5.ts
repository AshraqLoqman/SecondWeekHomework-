// Q5
// Create a function that takes in a year and returns the correct century.

// Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "11th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

function century(num){
    return(`${(num- num%100)*0.01+1}th century`)
}

console.log(century(1756))
console.log(century(1555))
console.log(century(1000))
console.log(century(1001))
console.log(century(2005))







