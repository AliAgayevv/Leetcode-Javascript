/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  let isNegative = n < 0;
  n = Math.abs(n);

  let pow = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      pow *= x;
    }

    x *= x;
    n = Math.floor(n / 2);
  }

  return isNegative ? 1 / pow : pow;
};
