/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function Node (val) {
  this.val = val
  this.next = null
}

// Since l1, l2 inputs are array, we will solve with arrays and ignore Linked List
// const addTwoNumbers = (l1, l2) => {
//   let carry = 0
//   let newSum = []
//   for (let i = 0; i < l1.length; ++i) {
//     const sum = l1[i] + l2[i] + carry
//     const modulo = sum % 10
//     newSum.push(modulo)
//     carry = sum >= 10 ? parseInt(Array.from(sum + '')[0]) : 0
//   }
//   return newSum
// }

const addTwoNumbers = (l1, l2) => {
  const sum = l1.val + l2.val
  const node = new Node(sum % 10)

  node.next = addTwoNumbers(l1.next, l2.next)

  if (sum >= 10) {
    node.next = addTwoNumbers(node.next, new Node(1))
  }
  return node
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
