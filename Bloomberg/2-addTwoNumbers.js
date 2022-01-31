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

/* logic:
1. construct dummy node and have current head pointer point to it. set carry to 0
2. while l1 or l2 exist:
  - x & y variables will be the val stored in the nodes that l1 and l2 point to respectively
  - if either linked list does not exist, set the variable to 0;
  - set sum to summation of both variables and carry variable, if it exists;
  - re-assign carry to the floor integer of the sum divided by 10
  - re-assign sum to be the remainder of the sum divided by 10;
  - create new node with its val variable set to the new sum integer;
  - let current head's next variable point to the newly created node;
  - if l1 exists and its next variables point to a node, reassign the head pointer l1 to respective next node;
  - same for l2
  - reassign newHead pointer to current head's next node;
3. if carry is left over, create new node with val set to carry, then set current head's next pointer to this new node
4. return dummy node's next variable, i.e. the first real node of the newly made linked list.

*/

var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0);

  let current = dummyNode;

  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    let sum = x + y + carry;

    carry = Math.floor(sum / 10);

    sum = sum % 10;

    current.next = new ListNode(sum);

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    current = current.next;
  }

  if (carry > 0) current.next = new ListNode(carry);

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
