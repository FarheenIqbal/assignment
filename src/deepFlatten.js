export function deepFlatten(arr) {
  if (!arr) {
    return []
  }
  const result = []
  function deepF(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        deepF(arr[i])
      } else {
        result.push(arr[i])
      }
    }
  }
  deepF(arr)
  return result
}
