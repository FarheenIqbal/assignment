//replaces names of multiple object keys with values provided
function renameKeys(keysObject, object) {
  if (!keysObject || !object) return {}

  let newObj = {}
  let k1 = Object.keys(object)
  let k2 = Object.keys(keysObject)

  for (let i = 0; i < k1.length; i++) {
    let key = k1[i]
    if (k2.includes(key)) {
      let newName = keysObject[key]
      newObj[newName] = object[key]
    } else {
      newObj[key] = object[key]
    }
  }

  return newObj
}

console.log(
  renameKeys(
    { name: 'first-name', job: 'passion' },
    { name: 'Bobo', job: 'front-end master', shoeSize: 10 },
  ),
)
//{ 'first-name': 'Bobo', passion: 'front-end master', shoeSize: 10 }
