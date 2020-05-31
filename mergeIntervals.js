/*
Merge Intervals 
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var merge = function(intervals) {

    if(intervals.length === 0) return intervals;
    
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    let prev = sortedIntervals[0];
    let result = [prev];
    
    for(let elem of sortedIntervals){
        if(elem[0] <= prev[1]){
            prev[1] = Math.max(elem[1], prev[1])
        }
        else{
            result.push(elem);
            prev = elem;
        }
    }
    return result;
};
