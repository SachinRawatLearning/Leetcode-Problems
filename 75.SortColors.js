// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let countZero = 0,
    countOne = 0,
    countTwo = 0;
  for (const element of nums) {
    if (element === 0) countZero++;
    else if (element === 1) countOne++;
    else countTwo++;
  }
  nums.length = 0;
  while (countZero) {
    nums.push(0);
    countZero--;
  }
  while (countOne) {
    nums.push(1);
    countOne--;
  }
  while (countTwo) {
    nums.push(2);
    countTwo--;
  }

  return nums;
};
