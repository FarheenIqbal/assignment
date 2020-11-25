export function chunk(arr, size) {
  if (!arr || !size) {
    return []
  }
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const x = []
    for (let j = 0; j < size && i + j < arr.length; j++) {
      x.push(arr[i + j])
    }
    i += size - 1
    result.push(x)
  }
  return result
}
