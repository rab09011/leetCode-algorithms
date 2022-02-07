/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/


/* logic:
This is recursive. The function takes 3 parameters: a node, a min value the node's value has to be larger than, and a max value the node's value has to smaller than.

The base case: the node doesn't exist, making it a valid BST.
Recursive cases:
    left - the min value is passed as the 2nd parameter, and the current node's value becomes the 3rd parameter max.
    right - the current node's value becomes the 2nd parameter min, and the max is passed down as the 3rd parameter.

To initiate recursion, a few things must be true:
- the current node's value is smaller than the max
- the current node's value is bigger than the min

If not true, return false;
If true, initiate recursion: isValidBST(left) && isValidBST(right)
*/

var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if( root === null ) return true;

    return root.val < max && root.val > min ? isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max) :  false;
 };