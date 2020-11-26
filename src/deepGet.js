export function deepGet(obj, arr) {
  let x = obj[arr[0]]
  for (let i = 1; i < arr.length; i++) {
    x = x[arr[i]]
    if (x === undefined) {
      return undefined
    }
  }
  return x
}
