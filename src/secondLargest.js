function secondLargest(arr) {
    
    let large = -Infinity;
    let lastLarge = -Infinity;

    for(let i = 0;i < arr.length; i++) {
        if( arr[i] > large ) {
            lastLarge = large;
            large = arr[i];
        }
        else if(arr[i] > lastLarge) {
            lastLarge = arr[i];
        }
    }
    return lastLarge;
}

console.log(secondLargest([11,11,10]));                 //11
console.log(secondLargest([11,18,113,9,12,10]));        //18
console.log(secondLargest([11,178,13,9]));              //13