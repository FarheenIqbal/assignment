export function partition(arr: number[], value: number) {
  const newArray: number[][] = [[], []]
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] < value) {
      newArray[0].push(arr[i])
    } else if (arr[i] > value) {
      newArray[1].push(arr[i])
    }
  }
  return newArray
}
