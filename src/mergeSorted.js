export function mergeSorted(arrA, arrB) {
  const arrC = []
  let i = arrA.length - 1
  let j = arrB.length - 1
  while (i >= 0 && j >= 0) {
    if (arrA[i] >= arrB[j]) {
      arrC.push(arrA[i--])
    } else if (arrA[i] < arrB[j]) {
      arrC.push(arrB[j--])
    }
  }
  while (i >= 0) {
    arrC.push(arrA[i--])
  }
  while (j >= 0) {
    arrC.push(arrB[j--])
  }
  return arrC
}

console.log(mergeSorted([1], [2, 5, 7])) // [7,5,2,1]
console.log(mergeSorted([1, 2, 3], [2, 5])) // [5,3,2,2,1]
console.log(mergeSorted([], [])) // []
console.log(mergeSorted([1, 1], [2, 2])) // [2,2,1,1]
