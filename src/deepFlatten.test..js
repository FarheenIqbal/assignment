import { deepFlatten } from './deepFlatten'

it('deepFlatten', () => {
  expect(deepFlatten([1, [2, 3], [4, [5, 6]]])).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
  ])
  expect(deepFlatten([1, [2, [3, [4, 5]]], [6, 7, [8, 9]]])).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ])
})
