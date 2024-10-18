// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

// Constraints:

// 0 <= n <= 5 * 106
/**
 * @param {number} n
 * @return {number}
 */

//Using Sieve of Eratosthenes
var countPrimes = function (n) {
  if (n <= 2) return 0;

  let isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false; //0 and 1 are non-prime so set them as false;
  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) isPrime[j] = false; //Factors of non-prime will be prime so mark them as false
    }
  }
  return isPrime.reduce((acc, curr) => curr + acc, 0); //Return the count of true elements in the array
};
