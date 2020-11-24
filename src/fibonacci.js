
function fibonacci(n) {
   
    if(n <= 0)
    return [0];
    
    let arr=[0,1];

   for(let i=2;i<n;i++) {
    arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

console.log(fibonacci(-1));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));