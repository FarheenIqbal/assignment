let generateFibonacci = function (n) {
    
    for(let i=0;i<n;i++) {
        console.log(fibonacci(i));
    }
}

let fibonacci = (function () {
    let arr=[0,1];
    let fib=function(n){
        let result=arr[n];
        if(typeof result!=='number') {
            result=fib(n-1)+fib(n-2);
            arr[n]=result;
        }
        return result;
    }
    return fib;
}());

generateFibonacci(14);