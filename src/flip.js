export function flip(func) {
  return (...args) => {
    let arr = args
    arr = reverse(arr)
    return func(...arr)
  }
}

function reverse(arr) {
  const n = arr.length
  for (let i = 0; i < n / 2; i++) {
    ;[arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]]
  }
  return arr
}
