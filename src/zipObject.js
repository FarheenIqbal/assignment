export function zipObject(arrProperties, arrValues) {
  const obj = {}
  for (let i = 0; i < arrProperties.length; i++) {
    obj[arrProperties[i]] = arrValues[i]
  }
  return obj
}
