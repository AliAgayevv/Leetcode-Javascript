/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var set = new Set();
  var count = 0;
  // row uzre baxir
  for (var row = 0; row < board[0].length; row++) {
    count = 0;
    set.clear();
    for (var col = 0; col < board.length; col++) {
      if (
        (col === 1 || col === 4 || col === 7) &&
        (row === 1 || row === 4 || row === 7)
      ) {
        if (divide(row, col, board) === false) {
          return false;
        }
      }
      if (board[row][col] !== ".") {
        count++;
        set.add(board[row][col]);
      }
    }
    if (set.size !== count) return false;
  }

  // COlumn uzre baxir
  for (var row = 0; row < board[0].length; row++) {
    count = 0;
    set.clear();
    for (var col = 0; col < board.length; col++) {
      if (board[col][row] !== ".") {
        count++;
        set.add(board[col][row]);
      }
    }
    if (set.size !== count) return false;
  }

  return true;
};

const divide = function (row, col, board) {
  var set = new Set();
  var count = 0;

  for (var i = row - 1; i <= row + 1; i++) {
    for (var j = col - 1; j <= col + 1; j++) {
      if (board[i][j] !== ".") {
        count++;
        set.add(board[i][j]);
      }
    }
  }
  if (set.size !== count) return false;
};

var test = [
  ["6", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(test));
