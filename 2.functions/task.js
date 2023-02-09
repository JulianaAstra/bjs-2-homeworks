function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((a, b) => a + b);
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

/* 
Во всех функциях должна быть проверка наличия элементов. Если элементы не передавались в функцию, то нет смысла что-либо считать и можно сразу возвращать ноль.
*/

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = arr.reduce((a, b) => a + b);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0; 
  let countEvenElement = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

}
