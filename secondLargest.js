function secondLargest(arr) {
    let indexOfLarge = largest(arr);
    let bArr=arr.slice();
    bArr[indexOfLarge]=-Infinity;
    return bArr[largest(bArr)];

}

function largest(arr) {
    let large = arr[0];
    let index = 0;
    for(let i = 1;i < arr.length; i++) {
        if( large < arr[i] ) {
            large = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(secondLargest([11,78,3]));
console.log(secondLargest([1,78,3,90,12,0]));