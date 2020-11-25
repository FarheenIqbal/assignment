import { flip, subtract, subtract3, divide } from './flip'

it('flip', () => {
  expect(flip(subtract)(200, 100)).toBe(-100)
  expect(flip(subtract3)(100, 200, 300)).toBe(0)
  expect(flip(divide)(200, 100)).toBe(0.5)
})
