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
hello() // hello
hello() // no output

const bye = once(() => {
  console.log('bye')
})
bye() // bye
bye() // no output
