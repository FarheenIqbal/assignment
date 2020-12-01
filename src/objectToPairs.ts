export function objectToPairs<B>(obj: B): [][] | undefined {
  if (!obj) {
    return undefined
  }
  const keys: string[] = Object.keys(obj)
  const values:

  let arr: [][]
  for (let i = 0; i < keys.length; i++) {
    arr.push([keys[i], obj[keys[i]]])
  }
  return arr
}
