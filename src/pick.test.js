import { pick } from './pick'

it('pick', () => {
  expect(pick()).toStrictEqual({})
  expect(pick({ a: 1, b: '2', c: 3 })).toStrictEqual({})
  expect(pick({ a: 1, b: '2', c: 3 }, ['a'])).toStrictEqual({ a: 1 })
  expect(pick({ a: 1, b: '2', c: 3 }, ['a', 'b'])).toStrictEqual({
    a: 1,
    b: '2',
  })
  expect(pick({ a: 1, b: '2', c: 3 }, ['a', 'b', 'c'])).toStrictEqual({
    a: 1,
    b: '2',
    c: 3,
  })
})
