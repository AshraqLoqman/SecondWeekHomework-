// Q8 Write a program to validate if the number is from multiples of 2 .
// ex: console.log(isMultiplesOfTwo(2))     output: true
// ex: console.log(isMultiplesOfTwo(512))     output: true
// ex: console.log(isMultiplesOfTwo(513))     output: false
// ex: console.log(isMultiplesOfTwo(255))     output: false

function isMultiplesOfTwo(num){
    if(num%2==0)
        return true
    else return false
}

console.log(isMultiplesOfTwo(2))
console.log(isMultiplesOfTwo(512))
console.log(isMultiplesOfTwo(513))
console.log(isMultiplesOfTwo(255))