function pairs(arr) {
  let pairsArr = []
  if (arr.length === 1) return [[1, 0]]
  for (let i = 0; i < arr.length - 1; i++) {
    pairsArr[i] = []
    pairsArr[i][0] = arr[i]
    pairsArr[i][1] = arr[i + 1]
  }
  return pairsArr
}

console.log(pairs([]))
console.log(pairs([1]))
console.log(pairs([1, 2]))
console.log(pairs([1, 2, 3]))
console.log(pairs([1, 2, 3, 4]))

//output
// []
// [ [ 1, 0 ] ]
// [ [ 1, 2 ] ]
// [ [ 1, 2 ], [ 2, 3 ] ]
// [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]
