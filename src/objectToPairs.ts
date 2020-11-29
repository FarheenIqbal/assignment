type A = [[string, number]]
type B = { [key: string]: number }
export function objectToPairs(obj: B): A | undefined {
  if (!obj) {
    return undefined
  }
  const keys: string[] = Object.keys(obj)
  let arr: A
  for (let i = 0; i < keys.length; i++) {
    arr.push([keys[i], obj[keys[i]]])
  }
  return arr
}
