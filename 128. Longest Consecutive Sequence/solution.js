/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  var count = 0;
  var longestCount = 0;

  var numsSet = new Set(nums);
  var numsArray = Array.from(numsSet);
  numsArray.sort((a, b) => a - b);

  for (var i = 1; i < numsArray.length; i++) {
    if (numsArray[i - 1] === numsArray[i] - 1) {
      count++;
    } else {
      longestCount = Math.max(longestCount, count);
      count = 0;
    }
  }

  longestCount = Math.max(longestCount, count);

  if (nums.length > 0) return longestCount + 1;
  return longestCount;
};
