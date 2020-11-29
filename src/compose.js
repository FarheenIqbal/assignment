export function compose(...multiFunctions) {
  return (...args) => {
    if (!args || !multiFunctions) {
      return undefined
    }
    let result = args
    let i = multiFunctions.length - 1
    // calling last function with multi parameters
    result = multiFunctions[i--](...result)
    for (; i >= 0; i--) {
      // calling remaining functions
      result = multiFunctions[i](result)
    }
    return result
  }
}
