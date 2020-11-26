import { sumOfPrimes, primes, isPrime } from './sumOfPrimes'

it('isPrimes', () => {
  expect(isPrime(7)).toBe(true)
  expect(isPrime(8)).toBe(false)
})

it('primes', () => {
  expect(primes(3)).toStrictEqual([2])
  expect(primes(5)).toStrictEqual([2, 3])
  expect(primes(15)).toStrictEqual([2, 3, 5, 7, 11, 13])
})

it('sumOfPrimes', () => {
  expect(sumOfPrimes(primes(3))).toBe(2)
  expect(sumOfPrimes(primes(5))).toBe(5)
  expect(sumOfPrimes(primes(15))).toBe(41)
})
