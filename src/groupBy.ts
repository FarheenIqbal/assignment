type B<T> = { [key: string]: [T] }
type A<T> = { [key: number]: [T] }
export function groupBy<T>(arr: T[], func: Function): A<T> | B<T> {
  const obj: A<T> | B<T> = {}
  if (!arr || !func) {
    return obj
  }
  let x: keyof A<T> | keyof B<T>
  for (let i: number = 0; i < arr.length; i++) {
    x = func(arr[i])
    if (obj[x] === undefined) {
      obj[x] = [arr[i]]
    } else {
      obj[x].push(arr[i])
    }
  }
  return obj
}
