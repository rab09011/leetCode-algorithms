/* 
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

//Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0);

  let newHead = dummyNode;

  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    let sum = x + y + carry;

    carry = Math.floor(sum / 10);

    sum = sum % 10;

    newHead.next = new ListNode(sum);

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    newHead = newHead.next;
  }

  if (carry > 0) newHead.next = new ListNode(carry);

  return dummyNode.next;
};

//Constructing example linked lists:
const a = new ListNode(2, new ListNode(4, new ListNode(3)));
const b = new ListNode(5, new ListNode(6, new ListNode(4)));

const c = new ListNode(6, new ListNode(5));
const d = new ListNode(5, new ListNode(7));

const e = new ListNode(0, new ListNode(0, new ListNode(1)));
const f = new ListNode(5);

//console.log(addTwoNumbers(a, b));
//console.log(addTwoNumbers(c, d));
console.log(addTwoNumbers(e, f));
