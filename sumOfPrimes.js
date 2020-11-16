function sumOfPrimes(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}

function primes(n) {
    let i, j;
    let arr=[];
    for(i=1;i<=n;i++) {
        for(j=2;j<i;j++) {
            if(i%j == 0) {
              break;
            } 
        }
        if(j==i) {
         arr.push(i);
        }
    }
    return arr;
}

console.log(primes(0));                     //[]
console.log(sumOfPrimes(primes(0)));        //0

console.log(primes(5));                     //[2,3,5]
console.log(sumOfPrimes(primes(5)));        //10

console.log(primes(15));                    //[2,3,5,7,11,13]
console.log(sumOfPrimes(primes(15)));       //41