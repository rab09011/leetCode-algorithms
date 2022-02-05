/* Problem
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.
*/

/* Examples
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

const hashMap = function (arr) {
  const map = new Map();

  for (const num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }

  return map;
};

const intersect = function (nums1, nums2) {
  let output = [];
  let map2b = nums1.length < nums2.length ? nums1 : nums2;
  let arr = nums1.length < nums2.length ? nums2 : nums1;

  const table = hashMap(map2b);

  for (const num of arr) {
    if (table.has(num) && table.get(num) > 0) {
      output.push(num);
      table.set(num, table.get(num) - 1);
    }
  }

  return output;
};
