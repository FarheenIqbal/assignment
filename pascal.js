let pascal = function (lines) {
    let arr = [];
    for(let i = 0;i < lines; i++) {
        arr.push(getCoeff(i));
    }
    return arr;
}

function getCoeff(i) {
    let arr=[];
    for(let j = 0; j <= i; j++) {
        if(i == 0 || i == j){
          arr.push(1);
        }
        else {
          arr.push( factorial(i) / ( factorial(j) * factorial(i-j) ) );       
        }   
    }
    return arr;
}

let factorial = function (n) {
    let fact = 1;
    for(let i = 1;i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(pascal(5));