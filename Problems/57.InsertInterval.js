// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = [];
  let i = 0;

  // Iterate over intervals
  while (i < intervals.length) {
    // If the current interval ends before newInterval starts, add it directly to the result
    if (intervals[i][1] < newInterval[0]) {
      res.push(intervals[i]);
    }
    // If the current interval starts after newInterval ends, add newInterval to result, then switch to adding the remaining intervals directly
    else if (intervals[i][0] > newInterval[1]) {
      res.push(newInterval);
      newInterval = intervals[i]; // Update newInterval to the current interval
    }
    // If intervals overlap, merge the intervals by updating newInterval to cover both intervals
    else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
    i++;
  }

  // Add the last merged interval
  res.push(newInterval);
  return res;
};
