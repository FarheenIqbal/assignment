import { zip } from './zip'

it('zip', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([
    ['a', 1, true],
    ['b', 2, false],
  ])
  expect(zip(['a'], [1, 2], [true, false])).toStrictEqual([
    ['a', 1, true],
    [undefined, 2, false],
  ])
})
