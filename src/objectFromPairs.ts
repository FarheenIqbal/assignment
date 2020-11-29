type A = [[string, number]]
type B = { [key: string]: number }
export function objectFromPairs(arr: A): B {
  const obj: B = {}
  for (let i: number = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1]
  }
  return obj
}
