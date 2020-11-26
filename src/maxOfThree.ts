function max3(x:number, y:number, z:number) :number {
  return max2(x, max2(y, z))
}

function max2(x:number, y:number):number {
  return x > y ? x : y
}
