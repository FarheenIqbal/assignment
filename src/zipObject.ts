type T = number | string | boolean
type O = { [key: string]: T }
export function zipObject(arrProperties: string[], arrValues: T[]) {
  const obj: O = {}
  for (let i: number = 0; i < arrProperties.length; i++) {
    obj[arrProperties[i]] = arrValues[i]
  }
  return obj
}
