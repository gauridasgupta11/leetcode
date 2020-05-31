/*
Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
*/


var productExceptSelf = function(nums) {
   let output = [];
    let right = 1;
    let left = 1;
    
    for(let i=nums.length-1; i>=0; i--){
        output[i] = right;
        right *= nums[i];
    }
    
    for(let j=0; j<nums.length; j++){
        output[j] *= left;
        left *= nums[j];
    }
    
    return output;
};
