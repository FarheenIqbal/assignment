import { groupBy } from './groupBy'

it('groupBy', () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({
    4: [4.2],
    6: [6.1, 6.3],
  })
})
