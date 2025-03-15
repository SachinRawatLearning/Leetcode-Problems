// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

// Constraints:

// 2 <= n <= 58
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;

  let count_of_3s = Math.floor(n / 3);
  let remainder = n % 3;

  if (remainder === 0) {
    return 3 ** count_of_3s;
  } else if (remainder === 1) {
    return 3 ** (count_of_3s - 1) * 4;
  } else {
    return 3 ** count_of_3s * 2;
  }
};
