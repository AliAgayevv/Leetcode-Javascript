/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numbers = {};

  for (var i = 0; i < nums.length; i++) {
    if (!numbers.hasOwnProperty(nums[i])) {
      numbers[nums[i]] = 1;
    } else {
      numbers[nums[i]]++;
    }
  }

  return Object.entries(numbers)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => Number(key));
};
