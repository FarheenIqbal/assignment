import { any } from './any'

it('any', () => {
  expect(any([0, 1, 2, 0], x => x >= 2)).toBe(true)
  expect(any([2, 3, 4], x => x > 10)).toBe(false)
  expect(any([1, 2, 3, 4], x => x < 1)).toBe(false)
  expect(any([1, 2, 3, 4], x => x <= 1)).toBe(true)
  expect(any([1, 2, 3, 4])).toBe(true)
})
