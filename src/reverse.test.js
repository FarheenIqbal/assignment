import { reverse } from './reverse'

it('reverse', () => {
  expect(reverse()).toStrictEqual([])
  expect(reverse([1])).toStrictEqual([1])
  expect(reverse([1, 2])).toStrictEqual([2, 1])
  expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1])
  expect(reverse([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1])
})
