function any(arr, func) {
    if(func === undefined) return true;
    for(let i = 0;i < arr.length; i++) {
        if(func(arr[i])) return true;
    }
    return false;
}

console.log( any( [0,1,2,0], (x) => (x >= 2) ) );  //true
console.log( any( [2,3,4], (x) => (x > 10) ) );    //false
console.log( any( [1,2,3,4], (x) => (x < 1) ) );  //false
console.log( any( [1,2,3,4], (x) => (x <= 1) ) ); //true
console.log( any( [1,2,3,4] ) ); //true