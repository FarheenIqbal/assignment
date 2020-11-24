function all(arr, func) {
  if (func === undefined) {
    return true
  }

  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false
    }
  }
  return true
}

console.log(all([1, 2, 3, 4], x => x > 1)) // false
console.log(all([2, 3, 4], x => x > 1)) // true
console.log(all([1, 2, 3, 4], x => x < 1)) // false
console.log(all([1, 2, 3, 4], x => x >= 1)) // true
console.log(all([1, 2, 3, 4])) // true
