function flip(func) {
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

const subtract = (x, y) => x - y
const subtract3 = (x, y, z) => x - y - z
const divide = (x, y) => x / y
console.log(flip(subtract)(200, 100)) // -100
console.log(flip(subtract3)(100, 200, 300)) // 0
console.log(flip(divide)(200, 100)) // 0.5
