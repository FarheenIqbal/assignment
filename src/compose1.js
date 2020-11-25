function compose(...multiFunctions) {
  return (...args) => {
    let result = args
    console.log(multiFunctions, result.length)
    for (let i = multiFunctions.length - 1; i >= 0; i--) {
      if (result.length === 1) {
        result = multiFunctions[i](result[0])
        console.log('in if', result)
      } else {
        result = multiFunctions[i](result[0], result[1])
        console.log('in else', result.length)
      }
    }
    return result
  }
}

const add5 = x => x + 5
const multiply = (x, y) => x * y
console.log(compose(add5, multiply)(200, 100))
