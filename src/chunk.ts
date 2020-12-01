export function chunk<T>(arr: T[], size: number): T[][] {
  if (!arr || !size) {
    return []
  }
  const result: T[][] = []
  for (let i: number = 0; i < arr.length; i++) {
    const x: T[] = []
    for (let j: number = 0; j < size && i + j < arr.length; j++) {
      x.push(arr[i + j])
    }
    i += size - 1
    result.push(x)
  }
  return result
}
