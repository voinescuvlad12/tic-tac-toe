let turn = true;
let xindexes = [];
let yIndexes = [];
const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cell = document.getElementsByClassName('table-cell');

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener(
    'click',
    function () {
      if (!cell[i].innerHTML) {
        cell[i].innerHTML = turn ? 'X' : 'O';
        addValues(turn, i);
        turn = !turn;
      }
    },
    false
  );
}

function addValues(turn, i) {
  if (turn) {
    xindexes.push(i);
    check(xindexes, turn);
  } else {
    yIndexes.push(i);
    check(yIndexes, turn);
  }
}

function check(passedArray, turn) {
  // this should be a forEach
  // a map also returns an array as a result
  winners.map((winnersArray) => {
    if (winnersArray.every((element) => passedArray.includes(element))) {
      // if multiple conditions for a WIN is met, there will be multiple alerts
      alert(`${turn ? 'X' : 'O'} won the game`);
      clear();
    }
  });
  if (xindexes.length + yIndexes.length === 9) {
    alert(`Draw`);
    clear();
  }
}

function clear() {
  turn = true;
  xindexes = [];
  yIndexes = [];
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = '';
  }
}
