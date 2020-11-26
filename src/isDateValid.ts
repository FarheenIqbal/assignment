export function isDateValid(day : number, month : number, year : number) : boolean {
  return isMonth(month) && isDay(day, month, year) && isYear(year)
}

function isMonth(month : number) : boolean{
  return month >= 1 && month <= 12
}

function isDay(day : number, month : number, year : number) : boolean {
  return day >= 1 && day <= daysInMonth(month, year)
}

function daysInMonth(month : number, year : number) : number{
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

function isLeapYear(year : number) : boolean {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}
function isYear(year : number):boolean {
  return year >= 1970 && year <= 9999
}
