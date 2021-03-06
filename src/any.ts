export function any<T>(arr: T[], func: Function) {
  if (func === undefined) {
    return true
  }
  for (let i: number = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true
    }
  }
  return false
}
