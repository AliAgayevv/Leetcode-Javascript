/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var carry = 1;

  for (var i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    if (sum > 9) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
      break;
    }
  }
  if (carry > 0) {
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([9]));
