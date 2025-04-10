// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let square = nums[i] * nums[i];
    res.push(square);
  }
  res.sort((a, b) => a - b);
  return res;
};

//Two Pointers

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = new Array(nums.length);
  let start = 0,
    end = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      res[i] = nums[start] * nums[start];
      start++;
    } else {
      res[i] = nums[end] * nums[end];
      end--;
    }
  }

  return res;
};
