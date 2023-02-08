function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((a, b) => a + b);;
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
