export function dropWhile(arr, func) {
  const result = []
  if (!arr) {
    return []
  }
  let i
  // eslint-disable-next-line no-empty
  for (i = 0; i < arr.length && !func(arr[i]); i++) {}
  for (; i < arr.length; i++) {
    result.push(arr[i])
  }
  return result
}
