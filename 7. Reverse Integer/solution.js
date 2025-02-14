/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var temp = [];
  x = x.toString();
  var flag = false;
  if (x[0] === "-") flag = true;
  var iterator = flag ? 1 : 0;
  for (iterator; iterator < x.length; iterator++) {
    if ((x[iterator] !== "0" && flag !== 0) || flag !== 1) {
      temp.push(x[iterator]);
    }
  }

  var temp2 = 0;

  for (var j = 0; j < temp.length; j++) {
    temp2 = temp2 + temp[j] * Math.pow(10, j);
  }

  if (Math.pow(2, 31) < temp2 || Math.pow(2, -31) > temp2) {
    return 0;
  }
  temp2 = flag ? temp2 * -1 : temp2;

  return temp2;
};
