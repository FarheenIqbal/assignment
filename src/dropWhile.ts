type T = number | string | boolean
export function dropWhile(arr: T[], func: Function): T[] {
  const result: T[] = []
  if (!arr) {
    return []
  }
  let i: number
  // eslint-disable-next-line no-empty
  for (i = 0; i < arr.length && !func(arr[i]); i++) {}
  for (; i < arr.length; i++) {
    result.push(arr[i])
  }
  return result
}
