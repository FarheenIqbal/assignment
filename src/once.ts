export function once(func: Function): Function {
  let execute: boolean = true
  function x(): void | undefined {
    if (execute === true) {
      execute = false
      func()
    } else {
      return undefined
    }
  }
  return x
}
