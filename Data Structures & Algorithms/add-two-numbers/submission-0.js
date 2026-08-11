/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sentinelNode = new ListNode();
        let dummy = sentinelNode;

        let carry = 0;
        let p1 = l1;
        let p2 = l2;

        while(p1 || p2 || carry!=0){
            let p1Val = p1 ? p1.val : 0;
            let p2Val = p2 ? p2.val : 0;
            let sum = p1Val + p2Val + carry;

            if(sum>=10){
                carry = Math.floor(sum/10);
                sum%=10;
            } else {
                carry = 0;
            }

            dummy.next = new ListNode(sum);
            dummy = dummy.next;

            p1 = p1?.next;
            p2 = p2?.next;
        }
        return sentinelNode.next
        
    }
}
