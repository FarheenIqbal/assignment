type T = number | boolean | string
export function compact(arr: T[]): T[] {
  const result: Array<T> = []
  if (!arr) {
    return []
  }
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i])
    }
  }
  return result
}
