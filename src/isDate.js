function isDate(day, month, year) {
  return isMonth(month) && isDay(day, month) && isYear(year)
}

function isMonth(month) {
  return month >= 1 && month <= 12
}

function isDay(day, month) {
  switch (month) {
    //anuary, March, May, July, August, October, December.
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return day >= 1 && day <= 31
      break
    default:
      return day >= 1 && day <= 30
      break
  }
}

function isYear(year) {
  return year >= 1970 && year <= 9999
}

console.log(isDate(10, 10, 2012))
console.log(isDate(0, 10, 2012))
console.log(isDate(10, 13, 2000))
