// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [...words[0]];

  for (let i = 1; i < words.length; i++) {
    result = result.filter((char) => {
      let len = words[i].length;
      words[i] = words[i].replace(char, "");
      return len > words[i].length;
    });
  }

  return result;
};
