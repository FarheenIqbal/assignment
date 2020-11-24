function dropWhile(arr, func) {
  let result = []
  if (!arr) return []
  let i
  for (i = 0; i < arr.length && !func(arr[i]); i++);
  for (; i < arr.length; i++) {
    result.push(arr[i])
  }
  return result
}

console.log(dropWhile())
console.log(dropWhile([3, 10, 11, 12], x => x >= 10))
console.log(dropWhile([1, 2, 3, 4, 5, 6, 7], x => x >= 3))
