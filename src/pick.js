//picks key-value pairs corresponding to given keys
function pick(obj, keys) {
  if (!obj || !key) return {}
  let newObj = {}
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = obj[keys[i]]
  }
  return newObj
}

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])) //{ a: 1, c: 3 }
