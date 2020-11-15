
let fibonacci = function (n) {
    
    
    let term1 = 0;
    let term2 = 1;
    let term3;
    
    console.log("Fibonacci series:");
    console.log(term1);
    console.log(term2);
    
    for(let i=2;i<=n;i++) {

        term3 = term2 + term1;
        console.log( term3 );
        
        term1 = term2;
        term2 = term3;

    }
}

fibonacci(14);