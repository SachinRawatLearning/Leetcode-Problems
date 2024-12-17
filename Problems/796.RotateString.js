// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let shifts = 0;
  const arr = s.split("");

  while (shifts !== s.length) {
    let removed = arr.pop();
    arr.unshift(removed);
    let newS = arr.join("");
    if (newS === goal) return true;
    shifts++;
  }
  return false;
};
//when you concatenate a string with itself (s + s), it contains all possible rotations of the original string.
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
};
