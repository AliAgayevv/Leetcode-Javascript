/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    // hashMap[s[i]] - power of s[i] element at the hashMap (x = 10, v = 5 etc.)
    if (i + 1 < s.length && hashMap[s[i]] < hashMap[s[i + 1]]) {
      total -= hashMap[s[i]];
    } else {
      total += hashMap[s[i]];
    }
  }
  return total;
};

console.log(romanToInt("MCMXCIV"));
