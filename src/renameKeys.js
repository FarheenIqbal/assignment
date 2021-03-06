// replaces names of multiple object keys with values provided
export function renameKeys(keysObject, object) {
  if (!keysObject || !object) {
    return {}
  }

  const newObj = {}
  const k1 = Object.keys(object)
  const k2 = Object.keys(keysObject)

  for (let i = 0; i < k1.length; i++) {
    const key = k1[i]
    if (k2.includes(key)) {
      const newName = keysObject[key]
      newObj[newName] = object[key]
    } else {
      newObj[key] = object[key]
    }
  }

  return newObj
}
