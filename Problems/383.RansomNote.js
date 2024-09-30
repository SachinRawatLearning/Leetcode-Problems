// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote === magazine) return true;
  if (ransomNote.length > magazine.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let i = 0; i < ransomNote.length; i++) {
    frequencyCounter1[ransomNote[i]] =
      (frequencyCounter1[ransomNote[i]] || 0) + 1;
  }

  for (let i = 0; i < magazine.length; i++) {
    frequencyCounter2[magazine[i]] = (frequencyCounter2[magazine[i]] || 0) + 1;
  }

  console.log(frequencyCounter1, frequencyCounter2);

  for (let [key, value] of Object.entries(frequencyCounter1)) {
    if (!frequencyCounter2.hasOwnProperty(key)) return false;
    if (frequencyCounter2[key] < value) return false;
  }

  return true;
};
