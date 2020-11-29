export function pairs(arr: number[]): number[][] {
  const newArray: number[][] = []
  if (arr.length === 1) {
    return [[arr[0], arr[0]]]
  }
  for (let i: number = 0; i < arr.length - 1; i++) {
    newArray.push([arr[i], arr[i + 1]])
  }
  return newArray
}
