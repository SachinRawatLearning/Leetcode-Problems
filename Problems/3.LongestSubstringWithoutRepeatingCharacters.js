// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
/**
 * @param {string} s
 * @return {number}
 */

//Brute Force
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
        count = Math.max(count, set.size);
      } else break;
    }
  }
  return count;
};

//Sliding Window
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let count = 0;
  let seenObj = {};
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (seenObj[char]) {
      start = Math.max(start, seenObj[char]);
    }
    count = Math.max(count, i - start + 1);
    seenObj[char] = i + 1;
  }
  return count;
};
