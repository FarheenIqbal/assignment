export function isDateValid(day, month, year) {
  return isMonth(month) && isDay(day, month, year) && isYear(year)
}

function isMonth(month) {
  return month >= 1 && month <= 12
}

function isDay(day, month, year) {
  return day >= 1 && day <= daysInMonth(month, year)
}

function daysInMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31
    case 2:
      return isLeapYear(year) ? 29 : 28
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    default:
      return undefined
  }
}

function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}
function isYear(year) {
  return year >= 1970 && year <= 9999
}
