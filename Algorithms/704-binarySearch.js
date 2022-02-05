/* Problem
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
*/

/* Examples
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let half = Math.floor((r - l) / 2);
    let pivot = half + l;
    let num = nums[pivot];
    if (num === target) {
      return pivot;
    } else if (num < target) {
      l = pivot + 1;
    } else {
      r = pivot - 1;
    }
  }

  return -1;
};
