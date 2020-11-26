import { pluck } from './pluck'

it('pluck', () => {
  const simpsons = [
    { name: 'lisa', age: 8 },
    { name: 'homer', age: 36 },
    { name: 'marge', age: 34 },
    { name: 'bart', age: 10 },
  ]
  expect(pluck()).toStrictEqual([])
  expect(pluck(simpsons)).toStrictEqual([])
  expect(pluck(simpsons, 'hello')).toStrictEqual([])
  expect(pluck(simpsons, 'age')).toStrictEqual([8, 36, 34, 10])
  expect(pluck(simpsons, 'name')).toStrictEqual([
    'lisa',
    'homer',
    'marge',
    'bart',
  ])
})
