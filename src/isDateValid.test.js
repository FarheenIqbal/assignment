import { isDateValid } from './isDateValid'

it('isDateValid', () => {
  expect(isDateValid(10, 10, 2012)).toBe(true)
  expect(isDateValid(31, 4, 2012)).toBe(false)
  expect(isDateValid(30, 2, 2012)).toBe(false)
  expect(isDateValid(29, 2, 2000)).toBe(true)
  expect(isDateValid(29, 2, 2001)).toBe(false)
})
