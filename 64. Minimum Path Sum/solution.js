/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let n = grid.length,
    m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let x = 0; x < m; x++) {
      if (i > 0 && x > 0) {
        grid[i][x] += Math.min(grid[i - 1][x], grid[i][x - 1]);
      } else if (i > 0) {
        grid[i][x] += grid[i - 1][x];
      } else if (x > 0) {
        grid[i][x] += grid[i][x - 1];
      }
    }
  }
  return grid[n - 1][m - 1];
};
``;
