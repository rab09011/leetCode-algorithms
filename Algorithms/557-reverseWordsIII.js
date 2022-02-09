/*
Given a string s, reverse the order of characters in each word
within a sentence while still preserving whitespace and initial word order.

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let array = s.split(" ");

    let rev = array.map(word => word.split("").reverse().join(""));
    
    return rev.join(" ");
};

const s = "God Ding";
console.log(reverseWords(s))