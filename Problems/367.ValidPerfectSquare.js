// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

// Constraints:

// 1 <= num <= 231 - 1
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  for (let i = 0; i <= Math.floor(num / 2); i++) {
    if (i * i === num) return true;
  }
  return false;
};

//Beats 100%

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let start = 1;
  let end = num;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (middle * middle === num) return true;
    else if (middle * middle < num) start = middle + 1;
    else end = middle - 1;
  }

  return false;
};
