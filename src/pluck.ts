import { types } from '@babel/core'

type T = number | string | boolean
type B = { [key: string]: T }

export function pluck(arr: B, key: string): T[] {
  if (!arr || !key || !arr[0][key]) {
    return []
  }
  const result: T[] = []
  for (let i: number = 0; i < arr.length; i++) {
    result.push(arr[i][key])
  }
  return result
}
