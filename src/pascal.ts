export const pascal = function (lines : number) : number[] {
  const arr : number[] = []
  for (let i : number = 0; i < lines; i++) {
    arr.push(getCoefficient(i))
  }
  return arr
}

function getCoefficient(i : number) : number[] {
  const arr = []
  for (let j = 0; j <= i; j++) {
    if (i === 0 || i === j) {
      arr.push(1)
    } else {
      arr.push(factorial(i) / (factorial(j) * factorial(i - j)))
    }
  }
  return arr
}

const factorial = function (n : number) : number {
  let fact : number = 1
  for (let i : number = 1; i <= n; i++) {
    fact *= i
  }
  return fact
}
