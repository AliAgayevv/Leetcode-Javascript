/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let seen = {}; // Hash tablosu
  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) {
      return true; // Tekrar eden eleman bulundu
    }
    seen[nums[i]] = true;
  }
  return false;
};

console.log(containsDuplicate([0, 0, 1]));
