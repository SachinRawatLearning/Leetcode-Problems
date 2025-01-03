// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

//Brute Force - TLE
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //(1,8)(8,7) = (x2-x1)(yMin) = 7* 7 = 49
  //(1,0)(1,1) = if(x2-x1===0)return y
  let max = -Infinity;

  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      let x = j - i;
      let y = Math.min(height[i], height[j]);

      max = Math.max(x * y, max);
    }
  }

  return max === -Infinity ? 0 : max;
};

//Using Two Pointers

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);

    max = Math.max(max, h * width);

    if (height[left] < height[right]) {
      left++;
    } else right--;
  }

  return max;
};
