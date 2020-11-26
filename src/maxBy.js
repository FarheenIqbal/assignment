export function maxBy(arrOfObjects, func) {
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
