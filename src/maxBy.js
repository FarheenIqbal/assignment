function maxBy(arrOfObjects, func) {
  const arr = []
  for (let i = 0; i < arrOfObjects.length; i++) {
    arr.push(func(arrOfObjects[i]))
  }
  return arrOfObjects[maxIndex(arr)]
}

function maxIndex(arr) {
  let x = arr[0]
  let index = 0
  for (let i = 1; i < arr.length; i++) {
    if (x < arr[i]) {
      x = arr[i]
      index = i
    }
  }
  return index
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
