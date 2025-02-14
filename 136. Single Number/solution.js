/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let uniqNum = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    uniqNum = uniqNum ^ nums[idx];
    // 010 ^ 111 = 101 => 5
    // Research about XOR bit operator
  }
  return uniqNum;
};
