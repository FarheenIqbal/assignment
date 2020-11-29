export function shuffleArray(arr: number[]): number[] {
  const newArr: number[] = arr
  for (let i: number = newArr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i)
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

//console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]))
// [   8, 5, 4, 6,   1, 7, 2, 3 ]
