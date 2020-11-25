export function deepGet(obj, arr) {
  let x = obj[arr[0]]
  for (let i = 1; i < arr.length; i++) {
    x = x[arr[i]]
    if (x === undefined) {
      return undefined
    }
  }
  return x
}

export const index = 2
export const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c'],
    },
  },
}
