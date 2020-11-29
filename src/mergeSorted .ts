export function mergeSorted(arrA: number[], arrB: number[]) {
  const arrC: number[] = []
  let i: number = arrA.length - 1
  let j: number = arrB.length - 1
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
