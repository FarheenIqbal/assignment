// -- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 down to 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]

function shuffleArray(arr) {
  const newArr = arr
  for (let i = newArr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i)
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]))
// [   8, 5, 4, 6,   1, 7, 2, 3 ]
