export function partition(arr, value) {
  const newArray = [[], []]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < value) {
      newArray[0].push(arr[i])
    } else if (arr[i] > value) {
      newArray[1].push(arr[i])
    }
  }
  return newArray
}
