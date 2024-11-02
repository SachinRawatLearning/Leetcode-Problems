// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return 1;

  let hashMap = new Map();
  let longest = 0;

  nums.forEach((num) => hashMap.set(num, true));

  // Step 2: Iterate through numbers and only start counting if `num` is the start of a sequence
  for (let num of nums) {
    if (!hashMap.has(num - 1)) {
      // Start a new sequence only if `num - 1` is not present
      let currentNum = num;
      let count = 1;

      // Count the length of the sequence
      while (hashMap.has(currentNum + 1)) {
        currentNum += 1;
        count += 1;
      }

      // Update the longest length
      longest = Math.max(longest, count);
    }
  }

  return longest;
};
