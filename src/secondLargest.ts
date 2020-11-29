export function secondLargest(arr: number[]): number {
  let large = -Infinity
  let lastLarge = -Infinity

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      lastLarge = large
      large = arr[i]
    } else if (arr[i] > lastLarge) {
      lastLarge = arr[i]
    }
  }
  return lastLarge
}
