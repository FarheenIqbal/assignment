export const pascal = function (lines) {
  const arr = []
  for (let i = 0; i < lines; i++) {
    arr.push(getCoefficient(i))
  }
  return arr
}

function getCoefficient(i) {
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

const factorial = function (n) {
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
  }
  return fact
}
