export function fibonacci(n: number): number[] {
  if (n <= 0) {
    return [0]
  }

  const arr: number[] = [0, 1]

  for (let i: number = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr
}
