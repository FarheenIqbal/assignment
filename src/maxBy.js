function maxBy(arrOfObjects, func) {
  let index = 0
  let max = func(arrOfObjects[0])
  for (let i = 1; i < arrOfObjects.length; i++) {
    if (max < func(arrOfObjects[i])) {
      max = func(arrOfObjects[i])
      index = i
    }
  }
  return arrOfObjects[index]
}

const employees = [
  { name: 'john', age: 27, salary: '67000' },
  { name: 'john', age: 27, salary: '27000' },
  { name: 'lisa', age: 65, salary: '35000' },
  { name: 'joseph', age: 42, salary: '42000' },
  { name: 'martin', age: 35, salary: '80000' },
  { name: 'mary', age: 25, salary: '44000' },
]

console.log(maxBy(employees, e => e.salary)) // { name: 'martin', age: 65, salary: '80000' }
console.log(maxBy(employees, e => e.age)) // { name: 'lisa', age: 65, salary: '35000' }
console.log(maxBy(employees, e => e.name)) // { name: 'mary', age: 25, salary: '44000' }
