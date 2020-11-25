import { objectFromPairs } from './objectFromPairs'

it('objectFromPairs', () => {
  expect(objectFromPairs([])).toStrictEqual({})
  expect(objectFromPairs([['a', 1]])).toStrictEqual({ a: 1 })
  expect(
    objectFromPairs([
      ['a', 1],
      ['b', 2],
    ])
  ).toStrictEqual({ a: 1, b: 2 })
  expect(
    objectFromPairs([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
  ).toStrictEqual({ a: 1, b: 2, c: 3 })
})
