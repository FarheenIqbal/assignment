export const multiplyMatrix = function (matrixA : number[][], matrixB:number[][]) : number[][] {
  const rowSize:number = matrixA.length
  const colSize:number = matrixB[0].length

  const matrixC:number[][] = []

  for (let i:number = 0; i < rowSize; i++) {
    matrixC[i] = []

    for (let j:number = 0; j < colSize; j++) {
      matrixC[i][j] = multiplyArray(matrixA[i], getColumn(matrixB, j))
    }
  }
  return matrixC
}

const getColumn = function (matrix:number[][], j:number):number[] {
  const arr:number[] = []
  for (let i:number = 0; i < matrix.length; i++) {
    arr[i] = matrix[i][j]
  }
  return arr
}

const multiplyArray = function (arrA:number[], arrB:number[]) {
  let result:number = 0
  for (let i:number = 0; i < arrA.length; i++) {
    result += arrA[i] * arrB[i]
  }
  return result
}
