import { pairs } from './pairs'

it('pairs', () => {
  expect(pairs([])).toStrictEqual([])
  expect(pairs([7])).toStrictEqual([7, 7])
  expect(pairs([0, 2, 3])).toStrictEqual([
    [0, 2],
    [2, 3],
  ])
  expect(pairs([1, 2, 3, 4])).toStrictEqual([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
})
