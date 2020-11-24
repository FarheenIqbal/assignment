function deepGet(obj, arr) {
  let x = obj[arr[0]]
  for (let i = 1; i < arr.length; i++) {
    x = x[arr[i]]
    if (x === undefined) return null
  }
  return x
}

let index = 2
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c'],
    },
  },
}

console.log(deepGet(data, ['foo', 'foz', index])) //3
console.log(deepGet(data, ['foo', 'bar', 'baz', 1])) //b
console.log(deepGet(data, ['foo', 'bar', 'baz', 8, 'foz'])) //null
