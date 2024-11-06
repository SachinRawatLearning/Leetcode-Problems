// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //Sort the array
  intervals.sort((a, b) => a[0] - b[0]);
  const resArr = [];
  for (let i = 0; i < intervals.length; i++) {
    //If Result Array is empty or no conflicts, push on to result array
    if (!resArr.length || resArr?.[resArr.length - 1]?.[1] < intervals[i][0])
      resArr.push(intervals[i]);
    // else compare last element of result array and first element of interval[i] and place the max one
    else {
      resArr[resArr.length - 1][1] = Math.max(
        resArr[resArr.length - 1][1],
        intervals[i][1]
      );
    }
  }

  return resArr;
};
