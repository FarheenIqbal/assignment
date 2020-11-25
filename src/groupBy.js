export function groupBy(arr, func) {
  const obj = {}
  if (!arr || !func) {
    return obj
  }
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
