import { deepGet } from './deepGet'

it('deepGet', () => {
  const index = 2
  const data = {
    foo: {
      foz: [1, 2, 3],
      bar: {
        baz: ['a', 'b', 'c'],
      },
    },
  }

  expect(deepGet(data, ['foo', 'foz', index])).toBe(3)
  expect(deepGet(data, ['foo', 'bar', 'baz', 1])).toBe('b')
  expect(deepGet(data, ['foo', 'bar', 'baz', 8, 'foz'])).toBe(undefined)
})
