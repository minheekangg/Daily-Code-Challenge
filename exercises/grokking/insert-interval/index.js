/**
 * completed 10/14/2025
*/

/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}*/

class Solution {
  insert(intervals, new_interval) {
    const merged = [];
    let i = 0;
    // add times until current.end < new_interval.start
    while (i < intervals.length && intervals[i].end < new_interval.start) {
      merged.push(intervals[i]);
      i++;
    }

    // handle merging if new_interval.end > current start. update new_interval start+end
    while (i < intervals.length && (intervals[i].start <= new_interval.end)) {
      new_interval.start = Math.min(new_interval.start, intervals[i].start);
      new_interval.end = Math.max(new_interval.end, intervals[i].end);
      i++;
    }

    merged.push(new_interval);

    // add times for new_interval.end < current.start
    while (i < intervals.length) {
      merged.push(intervals[i]);
      i++;
    }

    return merged;
  }
}


module.exports = Solution;