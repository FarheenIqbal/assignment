let pascal = function (lines) {
    
    for(let i = 0; i < lines; i++) {
        console.log( displaySpaces(lines, i) + displayLine(i) );
    }
}

let displaySpaces = function(lines, i) {
    let str = "\t\t";
    for(let k = 1; k <= lines-i-1; k++) {
        str += " ";
    }
    return str;
}

let displayLine = function (i) {
    let str="";
    for(let j = 0; j <= i; j++) {
        if(i == 0 || i == j) str += "1";
        else {
            str += ( factorial(i) / ( factorial(j) * factorial(i-j) ) );
        }
        str += " ";
    }
    return str;
}

let factorial = function (n) {
    let fact = 1;
    for(let i=1;i<=n;i++) {
        fact *= i;
    }
    return fact;
}

pascal(5);