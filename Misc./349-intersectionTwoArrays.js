/*
Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must be unique and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4] or [4,9] is also accepted.
*/

const setIntersection = function (set1, set2) {
  let output = [];
  set1.forEach((el) => {
    if (set2.has(el)) {
      output.push(el);
    }
  });
  return output;
};

const intersection = function (nums1, nums2) {
  let x = new Set(nums1);
  let y = new Set(nums2);

  if (x.size < y.size) {
    return setIntersection(x, y);
  } else return setIntersection(y, x);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
