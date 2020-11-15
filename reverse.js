function reverse(arr) {
    let n = arr.length;
    let temp, i;
    for(i = 0; i < (n / 2) - 1; i++) {
       [ arr[i], arr[n-i-1] ] = [ arr[n-i-1], arr[i] ];
    }
    
    //to swap middle elements if arr is even length
    if( n % 2 == 0) {
        [ arr[i], arr[n-i-1] ] = [ arr[n-i-1], arr[i] ];
    }
    return arr;
}

console.log(reverse([1,2,4,5,7,5,6]));