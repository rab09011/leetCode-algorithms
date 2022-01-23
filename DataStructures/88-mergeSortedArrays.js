/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/* logic: 3 pointers
Make a copy of the nums1 array excluding the leading zeroes
Set two read pointers to read from the copied nums1 array and the nums2 array for comparisons
Set a write pointer for nums1 to fill all space (m+n)

To pull a number from copied nums1, these conditions:
 - pointer not out of bounds (r1 < m)
 - pointed number less than or equal to pointed number in nums2 (a <= b)
When nums2 runs out, pull the rest of the numbers immediately (r2 >= n)

Otherwise, pull from nums2
*/

const merge = function (nums1, m, nums2, n) {
  let r1 = 0;
  let r2 = 0;

  let nums1copy = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    let a = nums1copy[r1];
    let b = nums2[r2];

    if ((r1 < m && a <= b) || r2 >= n) {
      nums1[i] = a;
      r1++;
    } else {
      nums1[i] = b;
      r2++;
    }
  }
};
