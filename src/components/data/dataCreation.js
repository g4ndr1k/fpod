export function createMainTableData(fpod, hour, day, month, year) {
  return { fpod, hour, day, month, year };
}

export function createTYPData(age, stem, branch, hiddenStem) {
  return { age, stem, branch, hiddenStem };
}

export function createLuckAndFinanceHundredYearsData(
  age,
  year,
  element,
  sign,
  forts,
  luckCalamityOne,
  luckCalamityTwo
) {
  return { age, year, element, sign, forts, luckCalamityOne, luckCalamityTwo };
}
