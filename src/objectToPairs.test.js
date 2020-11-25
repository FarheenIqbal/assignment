import { objectToPairs } from './objectToPairs'

it('objectToPairs', () => {
  expect(objectToPairs()).toStrictEqual([])
  expect(objectToPairs({ a: 1 })).toStrictEqual([['a', 1]])
  expect(objectToPairs({ a: 1, b: 2 })).toStrictEqual([
    ['a', 1],
    ['b', 2],
  ])
})
