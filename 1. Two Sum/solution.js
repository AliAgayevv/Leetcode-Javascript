/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];

    if (hash.hasOwnProperty(complement)) {
      return [hash[complement], i];
    }

    hash[nums[i]] = i;
  }

  return [];
};

//
