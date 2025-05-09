// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104
/**
 * @param {number[]} arr
 * @return {boolean}
 */
/*
Test cases:
1. all increasing
2. all decreasing
3. arr length < 3
4. arr containing duplicates
5. arr not containing duplicates
6. zig-zag mountain
7. all equal
*/

// TC = O(n)
var validMountainArray = function (arr) {
  // 2 pointers - one will move from left to right and other will move from right to left
  // so that both meet at the peak point
  let left = 0,
    right = arr.length - 1;

  // condition: while either of the pointer is able to move
  while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
    if (arr[left] < arr[left + 1]) {
      ++left;
    }
    if (arr[right] < arr[right - 1]) {
      --right;
    }
  }
  // if left and right pointer does not meet at the peak - array contains equal integers or zig-zag pattern
  // OR all integers are in ascending order
  // OR all integers are in descending order
  if (left !== right || left === arr.length - 1 || right === 0) {
    return false;
  }
  return true;
};
