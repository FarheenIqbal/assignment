//omits key-value pairs corresponding to given keys
function omit(obj, keys) {
  if (!obj) return {}
  if (!keys) return obj
  let newObj = {}
  let allKeys = Object.keys(obj)
  for (let i = 0; i < allKeys.length; i++) {
    if (!keys.includes(allKeys[i])) {
      newObj[allKeys[i]] = obj[allKeys[i]]
    }
  }
  return newObj
}

console.log(omit({ a: 1, b: '2', c: 3 }, ['b'])) //{ a: 1, c: 3 }
console.log(omit({ a: 1, b: '2', c: 3 }, ['a', 'b'])) //{ c: 3 }
console.log(omit({ a: 1, b: '2', c: 3 }, ['a', 'b', 'c'])) //{}
console.log(omit({ a: 1, b: '2', c: 3 })) //{ a: 1, b: '2', c: 3 }
