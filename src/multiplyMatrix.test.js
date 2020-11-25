import { multiplyMatrix } from './multiplyMatrix'

it('multiplyMatrix', () => {
  expect(
    multiplyMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [1, 4],
        [2, 5],
        [3, 6],
      ]
    )
  ).toStrictEqual([
    [14, 32],
    [32, 77],
  ])
})
