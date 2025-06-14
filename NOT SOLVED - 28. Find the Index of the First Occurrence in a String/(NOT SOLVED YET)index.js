// demeli iki dene string var
// a = "salam"
// b = "lam"
// stringlerin bir birinin icinde oldugunu check et, includes olmadan
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var count = 0;
  var index;

  var currentChar;

  for (let i = 0; i < haystack.length; i++) {
    currentChar = haystack[i];
    count++;
    if (currentChar === needle[i]) {
      count--;
    }
    if(count !== )
  }

  return haystack.length - count;
};

console.log("sadbutsad & sad: ", strStr("sadbutsad", "sad"));
console.log("leetcode & leeto: ", strStr("leetcode", "leeto"));
console.log(strStr("ala", "bula"));
