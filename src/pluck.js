export function pluck(arr, key) {
  if (!arr || !key || !arr[0][key]) {
    return []
  }
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][key])
  }
  return result
}
