/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
Given head, the head of a linked list, 
determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Return true if there is a cycle in the linked list. 
Otherwise, return false.
*/

var hasCycle = function (head) {
  if (head == null) {
    return false;
  }

  let fast = head.next;
  let slow = head;

  while (fast != null && fast.next != null && slow != null) {
    if (fast == slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
};
