export function sumOfPrimes(arr: number[]): number {
  let sum: number = 0
  for (let i: number = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

export function primes(n: number): number[] {
  const arr = []
  for (let i: number = 2; i < n; i++) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }
  return arr
}

export function isPrime(num: number): boolean {
  for (let j: number = 2; j < num; j++) {
    if (num % j === 0) {
      return false
    }
  }
  return true
}
