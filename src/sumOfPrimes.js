export function sumOfPrimes(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

export function primes(n) {
  const arr = []
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }
  return arr
}

export function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false
    }
  }
  return true
}
