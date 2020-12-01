import { types } from '@babel/core'

export function pluck<U, K extends keyof U>(arr: U[], key: K): U[K][] {
  if (!arr || !key || !arr[0][key]) {
    return []
  }
  const result: U[K][] = []
  for (let i: number = 0; i < arr.length; i++) {
    result.push(arr[i][key])
  }
  return result
}
