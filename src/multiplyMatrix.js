let multiplyMatrix = function (matrixA, matrixB) {
  let rowSize = matrixA.length
  let colSize = matrixB[0].length

  let matrixC = []

  for (let i = 0; i < rowSize; i++) {
    matrixC[i] = []

    for (let j = 0; j < colSize; j++) {
      matrixC[i][j] = multiplyArray(matrixA[i], getColumn(matrixB, j))
    }
  }
  return matrixC
}

let getColumn = function (matrix, j) {
  let arr = []
  for (let i = 0; i < matrix.length; i++) {
    arr[i] = matrix[i][j]
  }
  return arr
}

let multiplyArray = function (arrA, arrB) {
  let result = 0
  for (let i = 0; i < arrA.length; i++) {
    result += arrA[i] * arrB[i]
  }
  return result
}

let aa = [
  [1, 2, 3],
  [4, 5, 6],
]
let bb = [
  [1, 4],
  [2, 5],
  [3, 6],
]

console.log(multiplyMatrix(bb, aa))
