export function all<T>(arr: T[], func: Function) {
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
