import { maxBy } from './maxBy'

it('maxBy', () => {
  const employees = [
    { name: 'john', age: 27, salary: '67000' },
    { name: 'john', age: 27, salary: '27000' },
    { name: 'lisa', age: 65, salary: '35000' },
    { name: 'joseph', age: 42, salary: '42000' },
    { name: 'martin', age: 35, salary: '80000' },
    { name: 'mary', age: 25, salary: '44000' },
  ]

  expect(maxBy(employees, e => e.salary)).toStrictEqual({
    name: 'martin',
    age: 35,
    salary: '80000',
  })
  expect(maxBy(employees, e => e.age)).toStrictEqual({
    name: 'lisa',
    age: 65,
    salary: '35000',
  })
  expect(maxBy(employees, e => e.name)).toStrictEqual({
    name: 'mary',
    age: 25,
    salary: '44000',
  })
})
