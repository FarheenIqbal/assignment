import { compact } from './compact'

it('compact', () => {
  expect(compact()).toStrictEqual([])
  expect(
    compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])
  ).toStrictEqual([1, 2, 3, 'a', 's', 34])
})
