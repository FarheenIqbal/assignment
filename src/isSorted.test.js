import { isSorted } from './isSorted'

it('isSorted', () => {
  expect(isSorted([])).toBe(true)
  expect(isSorted([1])).toBe(true)
  expect(isSorted([1, 12, 12])).toBe(true)
  expect(isSorted([11, 11, 2, 4, 8])).toBe(false)
  expect(isSorted([11, 22, 3, 4])).toBe(false)
})
