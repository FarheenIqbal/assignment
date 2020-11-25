function pairs(arr) {
  const newArray = []
  if (arr.length === 1) {
    return [arr[0], arr[0]]
  }
  for (let i = 0; i < arr.length - 1; i++) {
    newArray.push([arr[i], arr[i + 1]])
  }
  return newArray
}

console.log(pairs([]))
console.log(pairs([7]))
console.log(pairs([3, 2]))
console.log(pairs([0, 2, 3]))
console.log(pairs([1, 2, 3, 4]))
