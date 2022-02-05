/**** NOT COMPLETE */

//This is a file that showcases the switch sort algorithm.

const readline = require("readline");

function SwitchSort(arr) {
  let len = arr.length;

  let arrPositions = [];
  for (let i = 0; i < len; i++) {
    arrPositions.push([arr[i], i]);
  }

  arrPositions.sort((a, b) => {
    return a[0] - b[0];
  });

  let didVisit = new Array(len);
  for (let j = 0; j < len; j++) {
    didVisit[j] = false;
  }

  let result = 0;

  for (let k = 0; k < len; k++) {
    if (didVisit[k] || arrPositions[k][1] === k) {
      continue;
    }

    let cycle_size = 0;
    let l = k;

    while (!didVisit[l]) {
      didVisit[l] = true;
      l = arrPositions[l][1];
      cycle_size++;
    }

    if (cycle_size > 0) {
      result += cycle_size - 1;
    }
  }

  return result;
}

// keep this function call here
console.log(SwitchSort(readline()));
