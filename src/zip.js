export function zip(...arr) {
  const result = []
  const colSize = maxColSize(arr)
  for (let i = 0; i < colSize; i++) {
    const x = getColumn(arr, i)
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
  const x = []
  for (let i = 0; i < arr.length; i++) {
    x.push(arr[i][col])
  }
  return x
}
