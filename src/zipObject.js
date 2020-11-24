function zipObject(arrProperties, arrValues) {
  let obj = {}
  for (let i = 0; i < arrProperties.length; i++) {
    obj[arrProperties[i]] = arrValues[i]
  }
  return obj
}

console.log(zipObject(['a', 'b', 'c'], [1, 2]))
console.log(zipObject(['a', 'b'], [1, 2, 3]))

// output:
// { a: 1, b: 2, c: undefined }
// { a: 1, b: 2 }
