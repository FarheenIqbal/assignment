import { compose } from './compose'
it('compose', () => {
  const mul5 = x => x * 5
  const sub10 = x => x - 10
  const add15 = x => x + 15
  const multiply = (x, y) => x * y
  expect(compose(mul5, sub10, add15, multiply)(200, 100)).toBe(100025)
})
