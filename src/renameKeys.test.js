import { renameKeys } from './renameKeys'

it('renameKeys', () => {
  const changes = { name: 'first-name', job: 'passion' }
  const object = { name: 'Bob', job: 'front-end master', shoeSize: 10 }

  expect(renameKeys(changes, object)).toStrictEqual({
    'first-name': 'Bob',
    passion: 'front-end master',
    shoeSize: 10,
  })
})
