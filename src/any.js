export function any(arr, func) {
  if (func === undefined) {
    return true
  }
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true
    }
  }
  return false
}
