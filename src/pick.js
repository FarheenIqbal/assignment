// picks key-value pairs corresponding to given keys
export function pick(obj, keys) {
  if (!obj || !keys) {
    return {}
  }
  const newObj = {}
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = obj[keys[i]]
  }
  return newObj
}
