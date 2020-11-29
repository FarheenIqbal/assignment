export function isSorted(arr: number[]): boolean {
  for (let i: number = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}
