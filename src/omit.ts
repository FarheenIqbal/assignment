// omits key-value pairs corresponding to given keys
type A = { [key: string]: number | string | boolean }
type C = (keyof A)[]
export function omit(obj: A, keys: C): A {
  if (!obj) {
    return {}
  }
  if (!keys) {
    return obj
  }
  const newObj: A = {}
  const allKeys: C = Object.keys(obj)
  for (let i: number = 0; i < allKeys.length; i++) {
    if (!keys.includes(allKeys[i])) {
      newObj[allKeys[i]] = obj[allKeys[i]]
    }
  }
  return newObj
}
