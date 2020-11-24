import { all } from './all'

it('all', () => {
  expect(all([1, 2, 3, 4], x => x > 1)).toBe(false)
  expect(all([2, 3, 4], x => x > 1)).toBe(true)
  expect(all([1, 2, 3, 4], x => x < 1)).toBe(false)
  expect(all([1, 2, 3, 4], x => x >= 1)).toBe(true)
  expect(all([1, 2, 3, 4])).toBe(true)
})
