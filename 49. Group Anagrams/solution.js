/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var keys = {};

  for (var word of strs) {
    var key = word.split("").sort().join("");
    if (!keys[key]) {
      keys[key] = [];
    }
    keys[key].push(word);
  }

  return Object.values(keys);
};
