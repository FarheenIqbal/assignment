function pluck(arr,key) {
    if(!arr || !key || !arr[0][key]) return [];
    let result=[];
    for(let i=0;i<arr.length;i++) {
        result.push(arr[i][key]);
    }
    return result;
}

const simpsons = [
    { name: 'lisa', age: 8},
    { name: 'homer', age: 36},
    { name: 'marge', age: 34},
    { name: 'bart', age: 10},
];
console.log(pluck(simpsons,'age'));     // [ 8, 36, 34, 10 ]
console.log(pluck(simpsons,'name'));    // [ 'lisa', 'homer', 'marge', 'bart' ]
console.log(pluck(simpsons));           // []
console.log(pluck());                   // []
console.log(pluck(simpsons,'hello'));   //no output




