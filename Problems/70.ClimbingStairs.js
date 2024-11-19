// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let count = 0;
  let memoize = [1, 1, 2];

  const fibo = (steps) => {
    if (steps <= 0) return 0;
    if (steps === 1) return 1;
    if (steps === 2) return 2;

    if (memoize[steps]) return memoize[steps];

    const res = fibo(steps - 1) + fibo(steps - 2);
    memoize[steps] = res;
    return res;
  };

  return fibo(n);
};
