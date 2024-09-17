//169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const frequencyCounter = {};

  nums.forEach((ele) => {
    frequencyCounter[ele] = (frequencyCounter[ele] || 0) + 1;
  });

  let max = -Infinity;
  let majorityElement;

  for (let [key, value] of Object.entries(frequencyCounter)) {
    if (value > max) {
      max = value;
      majorityElement = key;
    }
  }

  return Number(majorityElement);
};
