function groupBy(arr, func) {
  let obj = {}
  if (!arr || !func) return obj
  let x
  for (let i = 0; i < arr.length; i++) {
    x = func(arr[i])
    if (obj[x] === undefined) {
      obj[x] = [arr[i]]
    } else {
      obj[x].push(arr[i])
    }
  }
  return obj
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
//console.log(groupBy(['one', 'two', 'three'], 'length')) ??
