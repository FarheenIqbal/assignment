import { duplicates } from './duplicates'

it('duplicates', () => {
  expect(duplicates()).toStrictEqual([])
  expect(duplicates([3])).toStrictEqual([3])
  expect(duplicates([1, 1, 2, 12, 2, 3, 33, 5, 3])).toStrictEqual([
    1,
    2,
    12,
    3,
    33,
    5,
  ])
})
