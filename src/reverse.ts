export function reverse(arr: number[]): number[] {
  if (!arr) {
    return []
  }
  const newArr: number[] = []
  for (let i: number = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}
