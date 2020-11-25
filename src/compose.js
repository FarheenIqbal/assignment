function compose(func1, func2) {
  return (x, y) => {
    const result = func2(x, y)
    return func1(result)
  }
}

const add5 = x => x + 5
const multiply = (x, y) => x * y
console.log(compose(add5, multiply)(200, 100))
