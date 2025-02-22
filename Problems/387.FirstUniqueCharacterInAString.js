// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.
var firstUniqChar = function (s) {
  const freq = {};

  // First pass: Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  // Second pass: Find the first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }

  return -1; // No unique character found
};
