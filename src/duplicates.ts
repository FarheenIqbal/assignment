export function duplicates<T>(arr: T[]): T[] {
  const result: T[] = []
  if (!arr) {
    return []
  }
  for (let i: number = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}
