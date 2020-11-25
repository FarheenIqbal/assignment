// omits key-value pairs corresponding to given keys
export function omit(obj, keys) {
  if (!obj) {
    return {}
  }
  if (!keys) {
    return obj
  }
  const newObj = {}
  const allKeys = Object.keys(obj)
  for (let i = 0; i < allKeys.length; i++) {
    if (!keys.includes(allKeys[i])) {
      newObj[allKeys[i]] = obj[allKeys[i]]
    }
  }
  return newObj
}
