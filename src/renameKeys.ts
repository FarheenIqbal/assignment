// replaces names of multiple object keys with values provided
type T = number | string | boolean
type A = { [key: string]: T }
type C = { [key: string]: string }

export function renameKeys(keysObject: C, object: A): A {
  if (!keysObject || !object) {
    return {}
  }

  const newObj: A = {}
  const k1: string[] = Object.keys(object)
  const k2: string[] = Object.keys(keysObject)

  for (let i: number = 0; i < k1.length; i++) {
    const key: string = k1[i]
    if (k2.includes(key)) {
      const newName: string = keysObject[key]
      newObj[newName] = object[key]
    } else {
      newObj[key] = object[key]
    }
  }

  return newObj
}
