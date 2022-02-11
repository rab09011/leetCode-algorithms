/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

logic:
Establish left and right pointers. We work on the right unless left is shorter.

We compare the pointer we are working on with its outer-most boundary (lmax or rmax, respectively)
If the current height is shorter than the boundary, that means there is water at this level. We add that value (boundary - height) to the total running sum.
If current height is not shorter than the boundary, that means there is no water trapped. We reset boundary height if current height is taller than previous boundary.

We continue working on pointers and incrementing/decrementing them until we reach the middle and then return the sum of trapped rain water.
*/

var trap = function(height) {
    let n = height.length; //the width of the map
    let l = 0;
    let r = n - 1;
    let lmax = 0;
    let rmax = 0;
    let ans = 0
    
    while(l < r){
        let lh = height[l];
        let rh = height[r];
        
        if(lh < rh){
            lh >= lmax ? (lmax = lh) : ans += (lmax - lh);
            ++l;
        } else {
            rh >= rmax ? (rmax = rh) : ans += (rmax - rh);
            --r;
        }
    }
    
    return ans;
};

let input = [4, 2, 0, 3, 2, 5];
console.log(trap(input));