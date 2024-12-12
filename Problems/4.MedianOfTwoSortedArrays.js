// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Combine both arrays
  const arr = [...nums1, ...nums2];

  // Sort the merged array
  arr.sort((a, b) => a - b);

  const n = arr.length;

  // Find the median
  if (n % 2 !== 0) {
    // Odd length: return the middle element
    return arr[Math.floor(n / 2)];
  } else {
    // Even length: return the average of the two middle elements
    return (arr[n / 2 - 1] + arr[n / 2]) / 2;
  }
};
