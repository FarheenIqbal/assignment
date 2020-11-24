function reverse(arr) {
    let n = arr.length;
    let temp, i;
    for(i = 0; i < (n / 2) ; i++) {
       [ arr[i], arr[n-i-1] ] = [ arr[n-i-1], arr[i] ];
    }
    return arr;
}

console.log(reverse([]));
console.log(reverse([1]));
console.log(reverse([1,2]));
console.log(reverse([1,2,3]));
console.log(reverse([1,2,3,4]));