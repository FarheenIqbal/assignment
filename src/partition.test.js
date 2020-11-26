import { partition } from './partition'

it('partition', () => {
  expect(partition([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    [1, 2],
    [4, 5, 6, 7],
  ])
})
