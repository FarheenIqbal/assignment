function once(func) {
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
const hello = once(() => {
  console.log('hello')
})

const bye = once(() => {
  console.log('bye')
})

hello()
hello()
hello()

bye()
bye()
bye()
