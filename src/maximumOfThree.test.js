import { max3 } from './maximumOfThree'

it('max3', () => {
  expect(max3(5, 7, 3)).toBe(7)
  expect(max3(15, 7, 3)).toBe(15)
  expect(max3(5, 7, 13)).toBe(13)
})
