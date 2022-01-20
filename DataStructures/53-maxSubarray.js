/*
Given an integer array nums, find the contiguous subarray
(containing at least one number) which has the largest sum
and return its sum.
*/

let maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let sum = nums[0];
  let largest = sum;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    sum += num;
    if (sum < num) {
      sum = num;
    }
    largest = Math.max(largest, sum);
  }

  return largest;
};

let ex1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //output = 6
//Explanation: [4,-1,2,1] has the largest sum = 6

let ex2 = [5, 4, -1, 7, 8]; //23

let res = maxSubArray(ex2);
console.log(res);
