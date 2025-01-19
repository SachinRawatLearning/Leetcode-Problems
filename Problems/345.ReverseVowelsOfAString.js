// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.
/**
 * @param {string} s
 * @return {string}
 */

const checkVowels = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char.toLowerCase())) return true;
  return false;
};

var reverseVowels = function (s) {
  let v = [];
  let res = "";
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (checkVowels(s[i])) v.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (v[left] === s[i]) {
      res += v[v.length - left - 1];
      left++;
    } else res += s[i];
  }
  return res;
};
