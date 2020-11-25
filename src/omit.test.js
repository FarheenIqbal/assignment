import { omit } from './omit'

it('omit', () => {
  expect(omit({ a: 1, b: '2', c: 3 }, ['b'])).toStrictEqual({ a: 1, c: 3 })
  expect(omit({ a: 1, b: '2', c: 3 }, ['a', 'b'])).toStrictEqual({ c: 3 })
  expect(omit({ a: 1, b: '2', c: 3 }, ['a', 'b', 'c'])).toStrictEqual({})
  expect(omit({ a: 1, b: '2', c: 3 })).toStrictEqual({ a: 1, b: '2', c: 3 })
})
