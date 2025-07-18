// You are given three strings: s1, s2, and s3. In one operation you can choose one of these strings and delete its rightmost character. Note that you cannot completely empty a string.

// Return the minimum number of operations required to make the strings equal. If it is impossible to make them equal, return -1.

// Example 1:

// Input: s1 = "abc", s2 = "abb", s3 = "ab"

// Output: 2

// Explanation: Deleting the rightmost character from both s1 and s2 will result in three equal strings.

// Example 2:

// Input: s1 = "dac", s2 = "bac", s3 = "cac"

// Output: -1

// Explanation: Since the first letters of s1 and s2 differ, they cannot be made equal.

// Constraints:

// 1 <= s1.length, s2.length, s3.length <= 100
// s1, s2 and s3 consist only of lowercase English letters.

function findMinimumOperations(s1, s2, s3) {
  let len = Math.min(s1.length, s2.length, s3.length);

  let sum = s1.length + s2.length + s3.length;

  if (s1[0] !== s2[0] || s1[0] !== s3[0] || s2[0] !== s3[0]) {
    return -1;
  }

  for (let i = 0; i < len; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) {
      sum -= 3;
    } else {
      break;
    }
  }

  return sum;
}
