import { fibonacci } from './fibonacci'

it('fibonacci', () => {
  expect(fibonacci(-1)).toStrictEqual([0])
  expect(fibonacci(0)).toStrictEqual([0])
  expect(fibonacci(1)).toStrictEqual([0, 1])
  expect(fibonacci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})
