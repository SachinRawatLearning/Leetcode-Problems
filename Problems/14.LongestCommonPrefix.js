// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

//////////////////////Sort and compare first and last element

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longestPrefix = "";

  if (strs.length === 1 && strs[0] !== "") return strs[0];

  const sortedStrs = strs.sort();

  let left = 0;
  let right = 0;

  while (true) {
    if (
      sortedStrs[0][left] === sortedStrs[sortedStrs.length - 1][right] &&
      sortedStrs[0][left] !== undefined
    ) {
      longestPrefix += sortedStrs[0][left];
      left++;
      right++;
    } else break;
  }

  return longestPrefix;
};
