/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];

      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }
  return res;
};

var test1 = [-1, 0, 1, 2, -1, -4];
var test2 = [0, 1, 1];
var test3 = [0, 0, 0];

console.log(`Answer of [${test1}]: ${threeSum(test1)}`);
console.log(`Answer of [${test2}]: ${threeSum(test2)}`);
console.log(`Answer of [${test3}]: ${threeSum(test3)}`);
