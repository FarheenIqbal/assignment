import { pascal } from './pascal'

it('pascal', () => {
  expect(pascal(5)).toStrictEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ])
})
