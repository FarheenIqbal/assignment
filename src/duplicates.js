function duplicates(arr) {
  let result = []
  if (!arr) return []
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(duplicates())
console.log(duplicates([3]))
console.log(duplicates([1, 1, 2, 12, 2, 3, 33, 5, 3]))

// output
// []
// [ 3 ]
// [ 1, 2, 12, 3, 33, 5 ]
