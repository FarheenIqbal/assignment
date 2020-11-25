import { dropWhile } from './dropWhile'

it('dropWhile', () => {
  expect(dropWhile()).toStrictEqual([])
  expect(dropWhile([3, 10, 11, 12], x => x >= 10)).toStrictEqual([10, 11, 12])
  expect(dropWhile([3, 10, 11, 12], x => x <= 10)).toStrictEqual([
    3,
    10,
    11,
    12,
  ])
  expect(dropWhile([1, 2, 3, 4, 5, 6, 7], x => x >= 3)).toStrictEqual([
    3,
    4,
    5,
    6,
    7,
  ])
})
