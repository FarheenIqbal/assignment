export function reverse(arr) {
  if (!arr) {
    return []
  }
  const n = arr.length
  for (let i = 0; i < n / 2; i++) {
    ;[arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]]
  }
  return arr
}
