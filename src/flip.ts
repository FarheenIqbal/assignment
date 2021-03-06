export function flip<T>(func: Function): Function {
  return (...args: T[]) => {
    let arr: T[] = args
    arr = reverse(arr)
    return func(...arr)
  }
}

function reverse<T>(arr: T[]): T[] {
  const n: number = arr.length
  for (let i: number = 0; i < n / 2; i++) {
    ;[arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]]
  }
  return arr
}
