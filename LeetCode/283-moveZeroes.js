/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input = [0, 1, 0, 3, 12];
OUtput = [1, 3, 12, 0, 0];
*/

/*logic:
Initialize pointer and start iterating through the array
When we see a positive number (not a zero), we swap our current number with the one at the location of the pointer.
We increment the pointer.
This will effectively move all positive numbers to the front while maintaining their order.
*/

var moveZeroes = function(nums) {
    l = 0;
    
    for(let r in nums) {
        let val = nums[r]
        if(val) {
            nums[r] = nums[l];
            nums[l] = val;
            l++;
        }
    }
    
    return nums;
};

let input = [0, 1, 0, 3, 12];
console.log(moveZeroes(input));