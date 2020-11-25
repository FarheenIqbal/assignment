import { deepGet, data, index } from './deepGet'

it('deepGet', () => {
  expect(deepGet(data, ['foo', 'foz', index])).toBe(3)
  expect(deepGet(data, ['foo', 'bar', 'baz', 1])).toBe('b')
  expect(deepGet(data, ['foo', 'bar', 'baz', 8, 'foz'])).toBe(undefined)
})
