/*
Given an integer array nums, return true if any value appears at least twice in the array
and return false if every element is distinct.
*/

let containsDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (map.hasOwnProperty(num)) {
      return true;
    } else map[num] = i;
  }
  return false;
};

let nums1 = [1, 2, 3, 1]; //true
let nums2 = [1, 2, 3, 4]; //false
let nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; //true

let ans3 = containsDuplicate(nums3);

console.log(ans3);
