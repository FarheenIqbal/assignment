
function deepFlatten(arr) {
    if(!arr) return [];
    let result = [];
    function deepF(arr) {
        for(let i=0;i<arr.length;i++) {
            if(typeof arr[i] === 'object') {
                deepF(arr[i]);
            } else {
            result.push(arr[i]);
            }
        }
    }
    deepF(arr);
    return result;
}

console.log(deepFlatten( [1, [2, 3], [4, [5,6]]]))
console.log(deepFlatten( [1, [2, [3, [4, 5]]], [6, 7, [8, 9]]])); 

//output:
// [ 1, 2, 3, 4, 5, 6 ]
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]