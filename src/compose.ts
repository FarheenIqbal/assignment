export function compose(...multiFunctions: Function[]): Function {
  return (...args: number[]): number => {
    if (!args || !multiFunctions) {
      return undefined
    }
    let result: number[] = args
    let i: number = multiFunctions.length - 1
    // calling last function with multi parameters
    let res: number = multiFunctions[i--](...result)
    for (; i >= 0; i--) {
      // calling remaining functions
      res = multiFunctions[i](res)
    }
    return res
  }
}
