export function once(func) {
  let execute = true
  function x() {
    if (execute === true) {
      execute = false
      func()
    } else {
      return undefined
    }
  }
  return x
}
