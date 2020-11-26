import { flip } from './flip'

it('flip', () => {
  const subtract = (x, y) => x - y
  const subtract3 = (x, y, z) => x - y - z
  const divide = (x, y) => x / y
  expect(flip(subtract)(200, 100)).toBe(-100)
  expect(flip(subtract3)(100, 200, 300)).toBe(0)
  expect(flip(divide)(200, 100)).toBe(0.5)
})
