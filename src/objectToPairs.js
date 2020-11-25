export function objectToPairs(obj) {
  if (!obj) {
    return []
  }
  const keys = Object.keys(obj)
  const arr = []
  for (let i = 0; i < keys.length; i++) {
    arr.push([keys[i], obj[keys[i]]])
  }
  return arr
}
