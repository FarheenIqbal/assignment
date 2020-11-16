function sumOfPrimes(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    return sum;
}

function primes(n) {
    let arr=[];
    for(let i=2;i<n;i++) {
        if(isPrime(i)) {
            arr.push(i);
        }    
    }
    return arr;
}

function isPrime(num) {
  for(let j=2;j<num;j++) {
    if(num%j == 0) {
      return false;
    } 
  }
  return true;
}

console.log(primes(3));                     //[2]
console.log(sumOfPrimes(primes(3)));        //2

console.log(primes(5));                     //[2,3]
console.log(sumOfPrimes(primes(5)));        //5

console.log(primes(15));                    //[2,3,5,7,11,13]
console.log(sumOfPrimes(primes(15)));       //41