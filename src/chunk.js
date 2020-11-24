function chunk(arr,size) {
    if(!arr || !size) return [];
    let result=[];
    for(let i=0;i<arr.length;i++) {
        let x=[];
        for(let j = 0; j < size  && i + j < arr.length; j++) {
          x.push( arr[i+j] );
        }
        i += size-1;
        result.push(x);
    }
    return result;
}

console.log(chunk());                   //[]    
console.log(chunk([1,2,3,4,5]));        //[]
console.log(chunk([1,2,3,4,5],1));      //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
console.log(chunk([1,2,3,4,5],2));      //[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1,2,3,4,5],3));      //[ [ 1, 2, 3 ], [ 4, 5 ] ]

