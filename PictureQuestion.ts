function ArrayShifts(a,n){

    for(let i=0;i<n;i++){
        let temp=a[0]
        for(let j=0;j<a.length-1;j++){
            a[j]=a[j+1]
        }
        a[a.length-1]=temp
    }
    return (a)
}

let a=[1,2,3,4,5]
let n=4

console.log(ArrayShifts(a,n))