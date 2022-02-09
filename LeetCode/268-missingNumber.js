/*
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

Input: nums = [3,0,1] -> Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number.

Input: nums = [0,1] -> Output: 2
Input: nums = [9,6,4,2,3,5,7,0,1] -> Output: 8

## logic: Guass' algorithm
as we loop over the array, we'll continue to add the current index position to a running sum. simultaneously, we will be summing the contents of the array itself. when we finish the loop, the difference between the two sums will be the missing number.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let sum = 0;
  let curr = 0;
  let n = 1;

  for (let num of nums) {
    curr += num;
    sum += n++;
  }

  return sum - curr;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
