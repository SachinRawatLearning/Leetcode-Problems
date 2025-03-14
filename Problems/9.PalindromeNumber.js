// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let newNum = 0;
  let k = x;
  while (x > 0) {
    let rem = Math.floor(x % 10);
    newNum = newNum * 10 + rem;
    x = Math.floor(x / 10);
  }
  return k === newNum;
};

var isPalindrome = function (x) {
  const str = String(x);
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  }
  return true;
};

var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") == x;
};
