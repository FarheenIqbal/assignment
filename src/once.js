function once(func) {
  let execute = true
  function x() {
    if (execute === true) {
      execute = false
      func()
    } else return null
  }
  return x
}

let hello = once(() => {
  console.log('hello')
})
hello() //hello
hello() //no output

let bye = once(() => {
  console.log('bye')
})
bye() //bye
bye() //no output
