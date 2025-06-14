/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 2) {
    return "";
  }

  var prefix = [];
  for (var i = 0; i < strs[1].length; i++) {
    if (strs[0][i] === strs[1][i] && strs[2][i] === strs[0][i]) {
      prefix.push(strs[0][i]);
    }
  }
  return prefix.toString().replace(",", "");
};

longestCommonPrefix([""]);
