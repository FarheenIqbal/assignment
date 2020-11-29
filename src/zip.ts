type T = number | string | boolean
export function zip(...arr: T[][]): T[][] {
  const result: T[][] = []
  const colSize: number = maxColSize(arr)
  for (let i: number = 0; i < colSize; i++) {
    const x: T[] = getColumn(arr, i)
    result.push(x)
  }
  return result
}

function maxColSize<T>(arr: T[][]): number {
  let max = arr[0].length
  for (let j = 1; j < arr.length; j++) {
    if (max < arr[j].length) {
      max = arr[j].length
    }
  }
  return max
}

function getColumn<T>(arr: T[][], col: number): T[] {
  const x: T[] = []
  for (let i = 0; i < arr.length; i++) {
    x.push(arr[i][col])
  }
  return x
}
