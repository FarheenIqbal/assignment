const maxOfThree = function (x, y, z) {
  if (x > y && x > z) {
    return x
  } else if (y > x && y > z) {
    return y
  } else {
    return z
  }
}

console.log(maxOfThree(5, 7, 3))
console.log(maxOfThree(15, 7, 3))
console.log(maxOfThree(5, 7, 13))
