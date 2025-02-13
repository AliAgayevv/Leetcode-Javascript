/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var set = new Set();
  var count = 0;
  for (var row = 0; row < board[0].length; row++) {
    count = 0;
    set.clear();
    for (var col = 0; col < board.length; col++) {
      if (board[row][col] !== ".") {
        count++;
        set.add(board[row][col]);
      }
    }
    if (set.size !== count) return false;
  }

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

var test = [
  ["5", "3", "", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var test2 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(test2));
