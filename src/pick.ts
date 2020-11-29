// picks key-value pairs corresponding to given keys
type T = number | string | boolean
type A = { [key: string]: T }
type C = (keyof A)[]
export function pick(obj: A, keys: C): A {
  if (!obj || !keys) {
    return {}
  }
  const newObj: A = {}
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = obj[keys[i]]
  }
  return newObj
}
