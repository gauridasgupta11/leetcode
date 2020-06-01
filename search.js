/*
Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

var search = function(nums, target) {
    
    let left = 0,
        right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor((left+right) / 2 );
        
        if(target === nums[mid]) return mid;
        
        //check if target is in left
        if(nums[left] <= nums[mid]){
            if(target >= nums[left] && target <= nums[mid]){
                //target is in left
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(target >= nums[mid] && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }   
        }
    }
    
   return -1;
};


//  for(let i=0; i<nums.length; i++){
//         if(nums.indexOf(target) > -1){
//             return nums.indexOf(target);
//         }
//         if(nums.indexOf(target) == -1){
//             return -1;
//         }
        
//     }
//     return -1;
