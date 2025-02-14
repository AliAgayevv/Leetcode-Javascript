/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1 && target === nums[0]) return 0;
  if (nums.length === 1 && target !== nums[0]) return -1;

  var left = 0;
  var right = nums.length - 1;

  while (right >= left) {
    var mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
