function objectFromPairs(arr) {
    let obj ={};
    for(let i=0;i<arr.length;i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

console.log(objectFromPairs([]));
console.log(objectFromPairs([['a',1],]));
console.log(objectFromPairs([['a',1],['b',2],]));
console.log(objectFromPairs([['a',1],['b',2],['c',3]]));