import { secondLargest } from './secondLargest'

it('secondLargest', () => {
  expect(secondLargest([11, 11, 10])).toBe(11)
  expect(secondLargest([11, 18, 113, 9, 12, 10])).toBe(18)
  expect(secondLargest([11, 178, 13, 9])).toBe(13)
})
