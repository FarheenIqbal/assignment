function compose(...multiFunctions) {
  return (...args) => {
    let result = args
    for (let i = multiFunctions.length - 1; i >= 0; i--) {
      if (Array.isArray(result)) {
        result = multiFunctions[i](...result)
      } else {
        result = multiFunctions[i](result)
      }
    }
    return result
  }
}
const mul5 = x => x * 5
const sub10 = x => x - 10
const add15 = x => x + 15
const multiply = (x, y) => x * y
console.log(compose(mul5, sub10, add15, multiply)(200, 100))
