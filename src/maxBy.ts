//type TypeObject<T> = { [key: string]: T }
export function maxBy<T>(arrOfObjects: T[], func: Function): T {
  let index: number = 0
  let max: T = func(arrOfObjects[0])
  for (let i: number = 1; i < arrOfObjects.length; i++) {
    if (max < func(arrOfObjects[i])) {
      max = func(arrOfObjects[i])
      index = i
    }
  }
  return arrOfObjects[index]
}
