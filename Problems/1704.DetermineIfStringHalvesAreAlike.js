// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const checkVowel = (ch) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (vowels.includes(ch)) return true;
    return false;
  };
  const half = Math.floor(s.length / 2);
  const left = s.split("").slice(0, half);
  const right = s.split("").slice(half, s.length);
  let leftV = 0;
  let rightV = 0;

  left.forEach((char) => {
    if (checkVowel(char)) leftV++;
  });
  right.forEach((char) => {
    if (checkVowel(char)) rightV++;
  });
  return leftV === rightV;
};
