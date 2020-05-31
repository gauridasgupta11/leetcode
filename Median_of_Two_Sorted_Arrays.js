/*
Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
  
    var result = [],
    leftLen = nums1.length,
    rightLen = nums2.length,
    l = 0,
    r = 0,
    median =0;
    
    while(l<leftLen && r<rightLen){
        if(nums1[l]<nums2[r]){
            result.push(nums1[l++]);
        }
        else{
            result.push(nums2[r++]);
        }
    }
    console.log(result);
    var sortedArr = result.concat(nums1.slice(l).concat(nums2.slice(r)));
    console.log(sortedArr);
    var sortedArrLen = sortedArr.length;
    
    var evenOdd = (sortedArr.length)%2;
    
    if(evenOdd !=0){
        var mid = Math.floor(sortedArrLen/2);
        median = sortedArr[mid];
        
    }
    
    else{
        var mid1 = Math.floor((sortedArrLen-1)/2);
        median = (sortedArr[mid1]+sortedArr[mid1+1])/2;
    }
    return median;
    
};



