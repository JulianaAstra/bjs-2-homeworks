"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - (4 * a * c);
  let root1;
  let root2;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  } else if (discriminant === 0) {
    root1 = -b / (2 * a);
    arr.push(root1);
  } else {
    arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = parseFloat(percent, 10);
  contribution = parseInt(contribution, 10);
  amount = parseInt(amount, 10);
  countMonths = parseInt(countMonths, 10);
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } else {
    let percentPerMonth = (percent / 100) / 12;
    let sumToBeReturned = amount - contribution;
    let totalPerMonth = sumToBeReturned * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
    let totalFull = totalPerMonth * countMonths;
    return parseFloat(totalFull.toFixed(2));
  }

}