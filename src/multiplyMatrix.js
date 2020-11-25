export const multiplyMatrix = function (matrixA, matrixB) {
  const rowSize = matrixA.length
  const colSize = matrixB[0].length

  const matrixC = []

  for (let i = 0; i < rowSize; i++) {
    matrixC[i] = []

    for (let j = 0; j < colSize; j++) {
      matrixC[i][j] = multiplyArray(matrixA[i], getColumn(matrixB, j))
    }
  }
  return matrixC
}

const getColumn = function (matrix, j) {
  const arr = []
  for (let i = 0; i < matrix.length; i++) {
    arr[i] = matrix[i][j]
  }
  return arr
}

const multiplyArray = function (arrA, arrB) {
  let result = 0
  for (let i = 0; i < arrA.length; i++) {
    result += arrA[i] * arrB[i]
  }
  return result
}
