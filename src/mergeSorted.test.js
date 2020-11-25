import { mergeSorted } from './mergeSorted'

it('mergeSorted', () => {
  expect(mergeSorted([], [])).toStrictEqual([])
  expect(mergeSorted([1], [2, 5, 7])).toStrictEqual([7, 5, 2, 1])
  expect(mergeSorted([1, 2, 3], [2, 5])).toStrictEqual([5, 3, 2, 2, 1])
  expect(mergeSorted([1, 1], [2, 2])).toStrictEqual([2, 2, 1, 1])
})
