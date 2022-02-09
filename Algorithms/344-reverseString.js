/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    let l = 0;
    let r = s.length - 1;
    let temp;
    
    while(l < r){
        temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        
        l++;
        r--;
    }
};

const s = ["H","a","n","n","a","h"];
const x = ["R", "a", "g", "h", "d", "a", "a"];

reverseString(s);
reverseString(x);

console.log(s);
console.log(x);