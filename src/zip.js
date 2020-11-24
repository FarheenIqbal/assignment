function zip(...arr) {
  let result = []
  let colsize = maxColSize(arr)
  for (let i = 0; i < colsize; i++) {
    let x = getColumn(arr, i)
    result.push(x)
  }
  return result
}

function maxColSize(arr) {
  let max = arr[0].length
  for (let j = 1; j < arr.length; j++) {
    if (max < arr[j].length) {
      max = arr[j].length
    }
  }
  return max
}

function getColumn(arr, col) {
  let x = []
  for (let i = 0; i < arr.length; i++) {
    x.push(arr[i][col])
  }
  return x
}

console.log(zip(['a', 'b'], [1, 2], [true, false]))
console.log(zip(['a'], [1, 2], [true, false]))
// output:
// [ [ 'a', 1, true ], [ 'b', 2, false ] ]
// [ [ 'a', 1, true ], [ undefined, 2, false ] ]
