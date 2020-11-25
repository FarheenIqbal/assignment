function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

console.log(isSorted([])) // true
console.log(isSorted([1])) // true
console.log(isSorted([1, 12, 12])) // true
console.log(isSorted([11, 11, 2, 4, 8])) // false
console.log(isSorted([11, 22, 3, 4])) // false
