function objectToPairs(obj) {
    if(!obj) return [];
    let keys =Object.keys(obj);
    let arr=[];
    for(let i=0;i<keys.length;i++) {
        arr.push( [ keys[i], obj[ keys[i] ] ]);
    }
    return arr;
}

console.log(objectToPairs());
console.log(objectToPairs({'a':1}));
console.log(objectToPairs({'a':1,'b':2}));