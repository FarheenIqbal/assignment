export const max3 = function (x, y, z) {
  return max2(x, max2(y, z))
}

const max2 = function (x, y) {
  return x > y ? x : y
}
