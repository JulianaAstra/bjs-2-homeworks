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
  
}