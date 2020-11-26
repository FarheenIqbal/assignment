import { zipObject } from './zipObject'

it('zipObject', () => {
  expect(zipObject(['a', 'b', 'c'], [1, 2])).toStrictEqual({
    a: 1,
    b: 2,
    c: undefined,
  })
  expect(zipObject(['a', 'b'], [1, 2, 3])).toStrictEqual({ a: 1, b: 2 })
})
