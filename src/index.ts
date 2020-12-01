// import { max3 } from './maximumOfThree'

// console.log(max3(1, 2, 3))

// import { duplicates } from './duplicates'

// console.log(duplicates(['hey', 'my', 'duty', 'final', 'my', 'hi', 'hey']))
// console.log(duplicates(['hey', 4, 9, 0, 23]))
// console.log(duplicates([12, 45, 2, 67, 12, 89, 34, 2]))

// import { all } from './all'
// console.log(all([1, 2, 3, 4], x => x > 1))
// console.log(all([2, 3, 4], x => x > 1))
// console.log(all([100 > 10, 2 < 5, true, true], x => true))
// console.log(all(['hello', 'hi', 'him'], x => x.length > 10))

// import { any } from './any'
// console.log(any([1, 2, 3, 4], x => x > 1))
// console.log(any([2, 3, 4], x => x > 1))
// console.log(any([100 > 10, 2 < 5, true, true], x => true))
// console.log(any(['hello', 'hi', 'him'], x => x.length > 10))

// import { compact } from './compact'

// console.log(compact([0, 1, false, 2, '', 3, 'a', 0 * 23, NaN, 's', 34]))

// import { maxBy } from './maxBy'

// const employees = [
//   { name: 'john', age: 27, salary: '67000' },
//   { name: 'john', age: 27, salary: '27000' },
//   { name: 'lisa', age: 65, salary: '35000' },
//   { name: 'joseph', age: 42, salary: '42000' },
//   { name: 'martin', age: 35, salary: '80000' },
//   { name: 'mary', age: 25, salary: '44000' },
// ]

// console.log(maxBy(employees, e => e.name))
// console.log(maxBy(employees, e => e.age))
// console.log(maxBy(employees, e => e.salary))

// console.log(
// objectFromPairs([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ])
// )

import { objectToPairs } from './objectToPairs'

console.log(objectToPairs({ a: 23, b: 12, c: 43 }))

// import { chunk } from './chunk'

// console.log(chunk([1, 2, 3, 4, 5], 1))
// console.log(chunk([1, 2, 3, 4, 5], 2))
// console.log(chunk(['hi', 'am', 'why', 'when', 'how', 'ever', 'all'], 2))

// import { pluck } from './pluck'

// const simpsons = [
//   { name: 'lisa', age: 8 },
//   { name: 'homer', age: 36 },
//   { name: 'marge', age: 34 },
//   { name: 'bart', age: 10 },
// ]
// console.log(pluck(simpsons, 'age'))
// console.log(pluck(simpsons, 'name'))

// import { groupBy } from './groupBy'

// console.log(groupBy([6.1, 4.2, 6.3], Math.floor))

// import { zip } from './zip'

// console.log(zip(['a', 'b'], [1, 2], [true, false]))
// console.log(zip(['a'], [1, 2], [true, false]))

// import { zipObject } from './zipObject'

// console.log(zipObject(['a', 'b', 'c'], [1, 2]))
// console.log(zipObject(['a', 'b'], [1, 2, 3]))

// import { pick } from './pick'

// console.log(pick({ a: 1, b: '2', c: 3 }, ['a']))
// console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'b']))
// console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'b', 'c']))

// import { omit } from './omit'

// console.log(omit({ a: 1, b: '2', c: 3 }, ['a']))
// console.log(omit({ a: 1, b: '2', c: 3 }, ['a', 'b']))
// console.log(omit({ a: 1, b: '2', c: 3 }, ['a', 'b', 'c']))

// import { renameKeys } from './renameKeys'
// console.log(
//   renameKeys(
//     { name: 'first-name', job: 'passion' },
//     { name: 'Bob', job: 'front-end master', shoeSize: 10 }
//   )
// )

// import { flip } from './flip'
// const subtract = (x, y) => x - y
// const subtract3 = (x, y, z) => x - y - z
// const divide = (x, y) => x / y
// console.log(flip(subtract)(200, 100))
// console.log(flip(subtract3)(100, 200, 300))
// console.log(flip(divide)(200, 100))

// import { once } from './once'
// const hello = once(() => {
//   console.log('hello')
// })

// const bye = once(() => {
//   console.log('bye')
// })

// hello()
// hello()
// hello()

// bye()
// bye()
// bye()

// import { compose } from './compose'

// const mul5 = x => x * 5
// const sub10 = x => x - 10
// const add15 = x => x + 15
// const multiply = (x, y) => x * y
// console.log(compose())
// console.log(compose(multiply))
// console.log(compose(mul5, sub10, add15, multiply)(200, 100))

// // import { objectFromPairs } from './objectFromPairs'
