function compact(arr) {
  let result = []
  if (!arr) return []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]))
//[ 1, 2, 3, 'a', 's', 34 ]
