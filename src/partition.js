function partition(arr, value) {
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

console.log(partition([1, 2, 3, 4, 5, 6, 7], 3))
