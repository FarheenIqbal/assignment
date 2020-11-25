import { chunk } from './chunk'

it('chunk', () => {
  expect(chunk()).toStrictEqual([])
  expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([])
  expect(chunk([1, 2, 3, 4, 5], 1)).toStrictEqual([[1], [2], [3], [4], [5]])
  expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]])
  expect(chunk([1, 2, 3, 4, 5], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5],
  ])
})
